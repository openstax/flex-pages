import { fetchBooks as defaultFetchBooks } from '../lib/fetchBooks.js';
/*
 * Server-side data loader for the block, kept in a directive-free module (like
 * the .config split) so it stays callable on the server. The component module
 * is `'use client'`, so anything exported from it becomes an opaque client
 * reference under RSC — `mapPageNodes` could not invoke a prefetch defined there.
 *
 * Reads the book ids off the block value and resolves their display data via the
 * fetcher. The result is attached to the node as `prefetched`.
 */
export function createBookTilePrefetch(fetchBooks) {
    return (value) => { var _a; return fetchBooks(((_a = value.books) !== null && _a !== void 0 ? _a : []).map((b) => b.id)); };
}
export const prefetch = createBookTilePrefetch(defaultFetchBooks);
