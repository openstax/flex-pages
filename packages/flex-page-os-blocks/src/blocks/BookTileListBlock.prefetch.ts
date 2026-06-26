import { fetchBooks as defaultFetchBooks } from '../lib/fetchBooks.js';
import type { FetchBooks } from '../lib/fetchBooks.js';
import type { BookTileListBlockConfig } from './BookTileListBlock.config.js';

/*
 * Server-side data loader for the block, kept in a directive-free module (like
 * the .config split) so it stays callable on the server. The component module
 * is `'use client'`, so anything exported from it becomes an opaque client
 * reference under RSC — `mapPageNodes` could not invoke a prefetch defined there.
 *
 * Reads the book ids off the block value and resolves their display data via the
 * fetcher. The result is attached to the node as `prefetched`.
 */
export function createBookTilePrefetch(fetchBooks: FetchBooks) {
  return (value: BookTileListBlockConfig['value']) =>
    fetchBooks((value.books ?? []).map((b) => b.id));
}

export const prefetch = createBookTilePrefetch(defaultFetchBooks);
