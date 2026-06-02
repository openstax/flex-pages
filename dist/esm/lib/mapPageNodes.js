import { JSDOM } from 'jsdom';
import { readLinkTarget, writeLinkTarget } from './linkBehavior';
// Rewrites dynamic-link targets encoded in a rich-text HTML string. Parses with
// jsdom — the same engine isomorphic-dompurify already runs on the server — so
// we walk the markup WITHOUT sanitizing. This is a data transform, not a
// security boundary: the renderer sanitizes unconditionally at draw time
// (Html / RawHtmlWithLinks), so re-sanitizing here would only risk silently
// mutating stored content beyond the link rewrite this function is meant to do.
async function rewriteHtmlLinks(html, linkMapper) {
    const { document } = new JSDOM(html).window;
    await Promise.all(Array.from(document.querySelectorAll('a[data-flex-link]')).map(async (a) => {
        const target = readLinkTarget(a);
        if (target)
            writeLinkTarget(a, await linkMapper(target));
    }));
    return document.body.innerHTML;
}
async function processField(field, value, ctx) {
    // structured link target
    if (field.type === 'link-target' && ctx.mappers.linkMapper) {
        return value ? ctx.mappers.linkMapper(value) : value;
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
    // Rich text lives in string fields. The literal `data-flex-link` marker scan
    // is exact and sidesteps the rich-text-vs-long-text field-type ambiguity
    // (e.g. Quote stores rich text in a 'long-text' field) — it only touches
    // strings that actually carry links.
    if (typeof value === 'string' && value.includes('data-flex-link') && ctx.mappers.linkMapper) {
        return rewriteHtmlLinks(value, ctx.mappers.linkMapper);
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
export async function mapPageNodes(nodes, blocks, mappers) {
    const ctx = { blocks, mappers };
    return Promise.all(nodes.map((node) => processBlock(node, ctx)));
}
