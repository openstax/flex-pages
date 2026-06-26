'use client';
import { BookTile } from '../components/BookTile.component.js';
import { fetchBooks as defaultFetchBooks } from '../lib/fetchBooks.js';
import type { FetchBooks } from '../lib/fetchBooks.js';
import { useBooks } from '../lib/useBooks.js';
import type { BookTileListBlockConfig } from './BookTileListBlock.config.js';
import './BookTileListBlock.css';

// Factory (HoC) that binds a book-data source for the client render path. Use it
// to register with a custom fetcher (e.g. a cache-backed one); the default-wired
// Component below is what the blocks barrel exports. The server-side loader lives
// in BookTileListBlock.prefetch (a directive-free module) so it stays callable on
// the server — see that file. When the host has hydrated data (`data.prefetched`)
// the component uses it and skips the client fetch.
export function createBookTileList(fetchBooks: FetchBooks) {
  return function BookTileList({data}: {data: BookTileListBlockConfig}) {
    const entries = data.value.books;
    const books = useBooks(entries.map((b) => b.id), fetchBooks, data.prefetched);

    return <div className='content-block-book-tiles'>
      {entries.map((entry) => <BookTile
        key={entry.id}
        config={entry}
        book={books[entry.id]}
        defaultButtonText={data.value.button_text}
      />)}
    </div>;
  };
}

export const Component = createBookTileList(defaultFetchBooks);
