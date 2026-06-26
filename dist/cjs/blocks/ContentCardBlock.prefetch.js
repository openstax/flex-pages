"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefetch = void 0;
exports.createContentCardPrefetch = createContentCardPrefetch;
const fetchContent_js_1 = require("../lib/fetchContent.js");
/*
 * Server-side data loader for the content card, in a directive-free module (like
 * book_tile_list's prefetch) so mapPageNodes can invoke it on the server. Reads
 * the single reference off the block value and resolves its display data; the
 * result is attached to the node as `prefetched`.
 */
function createContentCardPrefetch(fetchContent) {
    return async (value) => {
        const ref = value.reference;
        if (!ref)
            return undefined;
        const byId = await fetchContent([{ id: ref.id, type: ref.type }]);
        return byId[ref.id];
    };
}
exports.prefetch = createContentCardPrefetch(fetchContent_js_1.fetchContent);
