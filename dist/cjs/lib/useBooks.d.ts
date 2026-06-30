import type { BookData, FetchBooks } from './fetchBooks.js';
export declare function useBooks(ids: string[], fetchBooks: FetchBooks, prefetched?: Record<string, BookData>): Record<string, BookData>;
