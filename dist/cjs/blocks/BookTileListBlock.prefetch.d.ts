import type { FetchBooks } from '../lib/fetchBooks.js';
import type { BookTileListBlockConfig } from './BookTileListBlock.config.js';
export declare function createBookTilePrefetch(fetchBooks: FetchBooks): (value: BookTileListBlockConfig["value"]) => Promise<Record<string, import("../lib/fetchBooks.js").BookData>>;
export declare const prefetch: (value: BookTileListBlockConfig["value"]) => Promise<Record<string, import("../lib/fetchBooks.js").BookData>>;
