import { readLinkTarget, writeLinkTarget } from './linkBehavior.js';
// Default to the platform DOM when one is present (browser, and any DOM-capable
// runtime). Undefined under bare Node, where the caller must inject `parseHtml`.
const nativeParseHtml = typeof DOMParser !== 'undefined'
    ? (html) => new DOMParser().parseFromString(html, 'text/html')
    : undefined;
/*
 * Reads an image descriptor off an <img> tag's attributes, the rich-text analog
 * of readLinkTarget. `src`/`width`/`height` are the rendered form; the asset
 * reference (when present) lives in `data-image-id`, the counterpart to a link's
 * `data-link-value`. Returns null when there is nothing to map (no src and no id).
 */
function readImageFields(el) {
    var _a;
    const file = el.getAttribute('src');
    const id = (_a = el.getAttribute('data-image-id')) !== null && _a !== void 0 ? _a : undefined;
    if (file === null && id === undefined)
        return null;
    return {
        ...(id !== undefined ? { id } : {}),
        file: file !== null && file !== void 0 ? file : '',
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
function writeImageFields(el, image) {
    el.setAttribute('src', image.file);
    if (image.width)
        el.setAttribute('width', String(image.width));
    if (image.height)
        el.setAttribute('height', String(image.height));
    if (image.id) {
        el.setAttribute('data-image-id', image.id);
    }
    else {
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
async function rewriteHtmlContent(html, mappers, parseHtml) {
    if (!parseHtml) {
        throw new Error('mapPageNodes: rich-text contains links or images to rewrite but no HTML ' +
            'parser is available. Pass a `parseHtml` argument (e.g. `(html) => new ' +
            'JSDOM(html).window.document`) when running without a platform DOM.');
    }
    const { linkMapper, imageMapper } = mappers;
    const document = parseHtml(html);
    const jobs = [];
    if (linkMapper) {
        for (const a of Array.from(document.querySelectorAll('a[data-flex-link]'))) {
            const target = readLinkTarget(a);
            if (target)
                jobs.push(Promise.resolve(linkMapper(target)).then((t) => writeLinkTarget(a, t)));
        }
    }
    if (imageMapper) {
        for (const img of Array.from(document.querySelectorAll('img'))) {
            const image = readImageFields(img);
            if (image)
                jobs.push(Promise.resolve(imageMapper(image)).then((i) => writeImageFields(img, i)));
        }
    }
    await Promise.all(jobs);
    return document.body.innerHTML;
}
async function processField(field, value, ctx) {
    // structured link target
    if (field.type === 'link-target' && ctx.mappers.linkMapper) {
        return value ? ctx.mappers.linkMapper(value) : value;
    }
    // structured image
    if (field.type === 'image' && ctx.mappers.imageMapper) {
        return value ? ctx.mappers.imageMapper(value) : value;
    }
    // nested block array
    if (field.type === 'blocks') {
        return Array.isArray(value)
            ? Promise.all(value.map((node) => processBlock(node, ctx)))
            : value;
    }
    // list of items described by sub-fields (recurse into each item's sub-fields)
    if (field.type === 'list' && Array.isArray(field.fields)) {
        if (!Array.isArray(value))
            return value;
        const subFields = field.fields;
        return Promise.all(value.map(async (item) => {
            const out = { ...item };
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
async function processBlock(node, ctx) {
    var _a, _b;
    const meta = (_a = ctx.blocks[node.type]) === null || _a === void 0 ? void 0 : _a.fields;
    if (!meta)
        return node;
    // singular-`field` blocks (e.g. text) store their value directly at node.value
    if (meta.field) {
        return { ...node, value: await processField(meta.field, node.value, ctx) };
    }
    const value = node.value;
    const out = { ...value };
    for (const field of (_b = meta.fields) !== null && _b !== void 0 ? _b : []) {
        out[field.name] = await processField(field, value[field.name], ctx);
    }
    return { ...node, value: out };
}
export async function mapPageNodes(nodes, blocks, mappers, parseHtml = nativeParseHtml) {
    const ctx = { blocks, mappers, parseHtml };
    return Promise.all(nodes.map((node) => processBlock(node, ctx)));
}
