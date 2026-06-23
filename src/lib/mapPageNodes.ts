import type { BlockProcessingDefinition, BlockProcessingDefinitions, ContentBlockConfig } from '../ContentBlockContext.js';
import type { ImageFields } from '../components/Image.config.js';
import type { LinkFields } from '../components/Link.config.js';
import type { ConfigField } from '../index.js';
import { readLinkTarget, writeLinkTarget } from './linkBehavior.js';

/*
 * Pure, async, config-aware page transform for the app data layer. Walks the
 * page using each block's `config` (server-readable, since `config` lives
 * in directive-free modules) to locate mappable values — dynamic-link targets
 * (both structured `link-target` fields and links embedded in rich-text strings)
 * and `image` fields — and runs each through the matching mapper. A block-level
 * `blockMapper` also fires once per block (before its fields are walked), letting
 * an app rewrite or inspect whole blocks. This is how an app opts into dynamic
 * routing (e.g. resolving stored ids to current slugs) or dynamic asset
 * resolution (e.g. resolving an image id to its current url/size) without the
 * renderer ever depending on server components: it just rewrites the values the
 * renderer will receive.
 *
 * Mapper calls run concurrently (Promise.all); de-duplicating/batching across
 * repeated ids is the mapper's responsibility (e.g. a memoized wrapper).
 */

type LinkTarget = LinkFields['target'];

export type LinkMapper = (target: LinkTarget) => LinkTarget | Promise<LinkTarget>;
export type ImageMapper = (image: ImageFields) => ImageFields | Promise<ImageFields>;
export type BlockMapper = (block: ContentBlockConfig) => ContentBlockConfig | Promise<ContentBlockConfig>;

export interface PageNodeMappers {
  linkMapper?: LinkMapper;
  imageMapper?: ImageMapper;
  blockMapper?: BlockMapper;
}

// Environment seam: parse an HTML string into a DOM `Document`. The rich-text
// link rewrite only needs standard `Document`/`Element` APIs (querySelectorAll,
// get/set/removeAttribute, body.innerHTML), which both the browser's native
// `DOMParser` and a server polyfill (e.g. jsdom) satisfy identically. Injecting
// this keeps the renderer free of any server-only DOM library: the browser uses
// its built-in parser for free, and a Node caller passes one explicitly.
export type ParseHtml = (html: string) => Document;

// Default to the platform DOM when one is present (browser, and any DOM-capable
// runtime). Undefined under bare Node, where the caller must inject `parseHtml`.
const nativeParseHtml: ParseHtml | undefined =
  typeof DOMParser !== 'undefined'
    ? (html) => new DOMParser().parseFromString(html, 'text/html')
    : undefined;

// The block registry, keyed by type — the same `{ Component, config }` map the
// app already passes to ContentBlockRoot. We only read `.config`.
type BlockRegistry = Record<string, BlockProcessingDefinition<string>>;

type Ctx = { blocks: BlockRegistry; mappers: PageNodeMappers; parseHtml: ParseHtml | undefined };

/*
 * Reads an image descriptor off an <img> tag's attributes, the rich-text analog
 * of readLinkTarget. `src`/`width`/`height` are the rendered form; the asset
 * reference (when present) lives in `data-image-id`, the counterpart to a link's
 * `data-link-value`. Returns null when there is nothing to map (no src and no id).
 */
function readImageFields(el: Element): ImageFields | null {
  const file = el.getAttribute('src');
  const id = el.getAttribute('data-image-id') ?? undefined;
  if (file === null && id === undefined) return null;
  return {
    ...(id !== undefined ? { id } : {}),
    file: file ?? '',
    width: Number(el.getAttribute('width')) || 0,
    height: Number(el.getAttribute('height')) || 0,
  };
}

/*
 * Inverse of readImageFields: writes a (possibly resolved) image back onto an
 * <img> tag. Mirrors writeLinkTarget — keeps the rendered `src` in sync and
 * carries the asset id in `data-image-id`. Only writes width/height when the
 * mapper supplies them (truthy) so an unknown dimension never clobbers a real
 * one with `0`; other attributes (alt, class, …) are left untouched.
 */
function writeImageFields(el: Element, image: ImageFields): void {
  el.setAttribute('src', image.file);
  if (image.width) el.setAttribute('width', String(image.width));
  if (image.height) el.setAttribute('height', String(image.height));
  if (image.id) {
    el.setAttribute('data-image-id', image.id);
  } else {
    el.removeAttribute('data-image-id');
  }
}

// Rewrites mappable values encoded in a rich-text HTML string — dynamic-link
// targets (`a[data-flex-link]`) and images (`img`) — in a single parse. Parses
// with the injected `parseHtml` (native DOMParser in the browser, jsdom on the
// server) so we walk the markup WITHOUT sanitizing. This is a data transform,
// not a security boundary: the renderer sanitizes unconditionally at draw time
// (Html / RawHtmlWithLinks), so re-sanitizing here would only risk silently
// mutating stored content beyond the rewrites this function is meant to do.
async function rewriteHtmlContent(
  html: string,
  mappers: PageNodeMappers,
  parseHtml: ParseHtml | undefined,
): Promise<string> {
  if (!parseHtml) {
    throw new Error(
      'mapPageNodes: rich-text contains links or images to rewrite but no HTML ' +
        'parser is available. Pass a `parseHtml` argument (e.g. `(html) => new ' +
        'JSDOM(html).window.document`) when running without a platform DOM.',
    );
  }
  const { linkMapper, imageMapper } = mappers;
  const document = parseHtml(html);
  const jobs: Promise<void>[] = [];

  if (linkMapper) {
    for (const a of Array.from(document.querySelectorAll('a[data-flex-link]'))) {
      const target = readLinkTarget(a);
      if (target) jobs.push(Promise.resolve(linkMapper(target)).then((t) => writeLinkTarget(a, t)));
    }
  }

  if (imageMapper) {
    for (const img of Array.from(document.querySelectorAll('img'))) {
      const image = readImageFields(img);
      if (image) jobs.push(Promise.resolve(imageMapper(image)).then((i) => writeImageFields(img, i)));
    }
  }

  await Promise.all(jobs);

  return document.body.innerHTML;
}

async function processField(field: ConfigField, value: unknown, ctx: Ctx): Promise<unknown> {
  // structured link target
  if (field.type === 'link-target' && ctx.mappers.linkMapper) {
    return value ? ctx.mappers.linkMapper(value as LinkTarget) : value;
  }

  // structured image
  if (field.type === 'image' && ctx.mappers.imageMapper) {
    return value ? ctx.mappers.imageMapper(value as ImageFields) : value;
  }

  // nested block array
  if (field.type === 'blocks') {
    return Array.isArray(value)
      ? Promise.all(value.map((node) => processBlock(node as ContentBlockConfig, ctx)))
      : value;
  }

  // list of items described by sub-fields (recurse into each item's sub-fields)
  if (field.type === 'list' && Array.isArray(field.fields)) {
    if (!Array.isArray(value)) return value;
    const subFields = field.fields as ConfigField[];
    return Promise.all(value.map(async (item: Record<string, unknown>) => {
      const out: Record<string, unknown> = { ...item };
      for (const sub of subFields) {
        out[sub.name] = await processField(sub, item[sub.name], ctx);
      }
      return out;
    }));
  }

  // Rich text lives in string fields. Cheap literal substring pre-checks (the
  // `data-flex-link` marker for links, `<img` for images) sidestep the rich-
  // text-vs-long-text field-type ambiguity (e.g. Quote stores rich text in a
  // 'long-text' field) and skip parsing strings that carry neither.
  if (typeof value === 'string') {
    const rewriteLinks = ctx.mappers.linkMapper && value.includes('data-flex-link');
    const rewriteImages = ctx.mappers.imageMapper && value.includes('<img');
    if (rewriteLinks || rewriteImages) {
      return rewriteHtmlContent(value, ctx.mappers, ctx.parseHtml);
    }
  }

  return value;
}

async function processBlock(node: ContentBlockConfig, ctx: Ctx): Promise<ContentBlockConfig> {
  // Block-level hook runs first, so it can rewrite the block (including its
  // `type`) before we resolve its config and walk its fields.
  const block = ctx.mappers.blockMapper ? await ctx.mappers.blockMapper(node) : node;

  const meta = ctx.blocks[block.type]?.config;
  if (!meta) return block;

  // singular-`field` blocks (e.g. text) store their value directly at node.value
  if (meta.field) {
    return { ...block, value: await processField(meta.field, block.value, ctx) } as ContentBlockConfig;
  }

  const value = block.value as Record<string, unknown>;
  const out: Record<string, unknown> = { ...value };
  for (const field of meta.fields ?? []) {
    out[field.name] = await processField(field, value[field.name], ctx);
  }
  return { ...block, value: out } as ContentBlockConfig;
}

export async function mapPageNodes<D extends BlockProcessingDefinitions<any>>(
  nodes: ContentBlockConfig[],
  blocks: D,
  mappers: PageNodeMappers,
  parseHtml: ParseHtml | undefined = nativeParseHtml,
): Promise<ContentBlockConfig[]> {
  const ctx: Ctx = { blocks, mappers, parseHtml };
  return Promise.all(nodes.map((node) => processBlock(node, ctx)));
}
