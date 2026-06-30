"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
exports.createBookTileList = createBookTileList;
const jsx_runtime_1 = require("react/jsx-runtime");
const BookTile_component_js_1 = require("../components/BookTile.component.js");
const fetchBooks_js_1 = require("../lib/fetchBooks.js");
const useBooks_js_1 = require("../lib/useBooks.js");
require("./BookTileListBlock.css");
// Factory (HoC) that binds a book-data source for the client render path. Use it
// to register with a custom fetcher (e.g. a cache-backed one); the default-wired
// Component below is what the blocks barrel exports. The server-side loader lives
// in BookTileListBlock.prefetch (a directive-free module) so it stays callable on
// the server — see that file. When the host has hydrated data (`data.prefetched`)
// the component uses it and skips the client fetch.
function createBookTileList(fetchBooks) {
    return function BookTileList({ data }) {
        const entries = data.value.books;
        const books = (0, useBooks_js_1.useBooks)(entries.map((b) => b.id), fetchBooks, data.prefetched);
        return (0, jsx_runtime_1.jsx)("div", { className: 'content-block-book-tiles', children: entries.map((entry) => (0, jsx_runtime_1.jsx)(BookTile_component_js_1.BookTile, { config: entry, book: books[entry.id], defaultButtonText: data.value.button_text }, entry.id)) });
    };
}
exports.Component = createBookTileList(fetchBooks_js_1.fetchBooks);
