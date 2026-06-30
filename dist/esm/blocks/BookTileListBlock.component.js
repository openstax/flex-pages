'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { BookTile } from '../components/BookTile.component.js';
import { fetchBooks as defaultFetchBooks } from '../lib/fetchBooks.js';
import { useBooks } from '../lib/useBooks.js';
import './BookTileListBlock.css';
// Factory (HoC) that binds a book-data source for the client render path. Use it
// to register with a custom fetcher (e.g. a cache-backed one); the default-wired
// Component below is what the blocks barrel exports. The server-side loader lives
// in BookTileListBlock.prefetch (a directive-free module) so it stays callable on
// the server — see that file. When the host has hydrated data (`data.prefetched`)
// the component uses it and skips the client fetch.
export function createBookTileList(fetchBooks) {
    return function BookTileList({ data }) {
        const entries = data.value.books;
        const books = useBooks(entries.map((b) => b.id), fetchBooks, data.prefetched);
        return _jsx("div", { className: 'content-block-book-tiles', children: entries.map((entry) => _jsx(BookTile, { config: entry, book: books[entry.id], defaultButtonText: data.value.button_text }, entry.id)) });
    };
}
export const Component = createBookTileList(defaultFetchBooks);
