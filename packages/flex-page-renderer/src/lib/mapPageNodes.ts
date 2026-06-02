import type { ConfigField } from '..';
import type { ConfigMetadata, ContentBlockConfig } from '../ContentBlockContext';
import type { LinkFields } from '../components/Link.fields';
import { readLinkTarget, writeLinkTarget } from './linkBehavior';

/*
 * Pure, async, config-aware page transform for the app data layer. Walks the
 * page using each block's `fields` config (server-readable, since `fields` lives
 * in directive-free modules) to locate dynamic-link targets — both structured
 * `link-target` fields and links embedded in rich-text strings — and runs each
 * through the mapper. This is how an app opts into dynamic routing (e.g.
 * resolving stored ids to current slugs) without the renderer ever depending on
 * server components: it just rewrites the targets the renderer will receive.
 *
 * Mapper calls run concurrently (Promise.all); de-duplicating/batching across
 * repeated ids is the mapper's responsibility (e.g. a memoized wrapper).
 */

type LinkTarget = LinkFields['target'];

export type LinkMapper = (target: LinkTarget) => LinkTarget | Promise<LinkTarget>;

export interface PageNodeMappers {
  linkMapper?: LinkMapper;
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

// The block registry, keyed by type — the same `{ Component, fields }` map the
// app already passes to ContentBlockRoot. We only read `.fields`.
export type BlockRegistry = Record<string, { fields: ConfigMetadata<string> }>;

type Ctx = { blocks: BlockRegistry; mappers: PageNodeMappers; parseHtml: ParseHtml | undefined };

// Rewrites dynamic-link targets encoded in a rich-text HTML string. Parses with
// the injected `parseHtml` (native DOMParser in the browser, jsdom on the
// server) so we walk the markup WITHOUT sanitizing. This is a data transform,
// not a security boundary: the renderer sanitizes unconditionally at draw time
// (Html / RawHtmlWithLinks), so re-sanitizing here would only risk silently
// mutating stored content beyond the link rewrite this function is meant to do.
async function rewriteHtmlLinks(
  html: string,
  linkMapper: LinkMapper,
  parseHtml: ParseHtml | undefined,
): Promise<string> {
  if (!parseHtml) {
    throw new Error(
      'mapPageNodes: rich-text contains links to rewrite but no HTML parser is ' +
        'available. Pass a `parseHtml` argument (e.g. `(html) => new ' +
        'JSDOM(html).window.document`) when running without a platform DOM.',
    );
  }
  const document = parseHtml(html);

  await Promise.all(
    Array.from(document.querySelectorAll('a[data-flex-link]')).map(async (a) => {
      const target = readLinkTarget(a);
      if (target) writeLinkTarget(a, await linkMapper(target));
    })
  );

  return document.body.innerHTML;
}

async function processField(field: ConfigField, value: unknown, ctx: Ctx): Promise<unknown> {
  // structured link target
  if (field.type === 'link-target' && ctx.mappers.linkMapper) {
    return value ? ctx.mappers.linkMapper(value as LinkTarget) : value;
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

  // Rich text lives in string fields. The literal `data-flex-link` marker scan
  // is exact and sidesteps the rich-text-vs-long-text field-type ambiguity
  // (e.g. Quote stores rich text in a 'long-text' field) — it only touches
  // strings that actually carry links.
  if (typeof value === 'string' && value.includes('data-flex-link') && ctx.mappers.linkMapper) {
    return rewriteHtmlLinks(value, ctx.mappers.linkMapper, ctx.parseHtml);
  }

  return value;
}

async function processBlock(node: ContentBlockConfig, ctx: Ctx): Promise<ContentBlockConfig> {
  const meta = ctx.blocks[node.type]?.fields;
  if (!meta) return node;

  // singular-`field` blocks (e.g. text) store their value directly at node.value
  if (meta.field) {
    return { ...node, value: await processField(meta.field, node.value, ctx) } as ContentBlockConfig;
  }

  const value = node.value as Record<string, unknown>;
  const out: Record<string, unknown> = { ...value };
  for (const field of meta.fields ?? []) {
    out[field.name] = await processField(field, value[field.name], ctx);
  }
  return { ...node, value: out } as ContentBlockConfig;
}

export async function mapPageNodes(
  nodes: ContentBlockConfig[],
  blocks: BlockRegistry,
  mappers: PageNodeMappers,
  parseHtml: ParseHtml | undefined = nativeParseHtml,
): Promise<ContentBlockConfig[]> {
  const ctx: Ctx = { blocks, mappers, parseHtml };
  return Promise.all(nodes.map((node) => processBlock(node, ctx)));
}
