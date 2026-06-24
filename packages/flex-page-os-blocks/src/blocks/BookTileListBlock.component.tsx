'use client';
import type { ImageFields } from '@openstax/flex-page-renderer/components/Image.config';
import type { LinkFields } from '@openstax/flex-page-renderer/components/Link.config';
import { BookTile } from '../components/BookTile.component.js';
import { fetchBooks as defaultFetchBooks } from '../lib/fetchBooks.js';
import type { FetchBooks } from '../lib/fetchBooks.js';
import { useBooks } from '../lib/useBooks.js';
import './BookTileListBlock.css';

// One section of the dropdown menu; section boundaries become dividers once the
// shared DropdownMenu supports them. `items` are dynamic links (route/action/url).
export interface BookMenuSection {
  items: LinkFields[];
}

// Per-book configuration. `id` is the cnx UUID used to load cover/title; the
// link destinations are concrete per-book targets supplied by the config author
// (in practice the CMS proxy).
export interface BookTileConfig {
  id: string;
  button_text?: string;
  badge?: ImageFields;
  badge_alt?: string;
  title_link?: LinkFields['target'];
  menu?: BookMenuSection[];
}

export interface BookTileListBlockConfig {
  id: string;
  type: 'book_tile_list';
  value: {
    // default dropdown button label for every tile; a per-book button_text overrides it
    button_text?: string;
    books: BookTileConfig[];
  };
}

// Factory (HoC) that binds a book-data source. Use this to register the block
// with a custom fetcher (e.g. a cache-backed one); the default-wired component
// below is what the package's blocks barrel exports.
export function createBookTileList(fetchBooks: FetchBooks) {
  return function BookTileList({data}: {data: BookTileListBlockConfig}) {
    const entries = data.value.books;
    const books = useBooks(entries.map((b) => b.id), fetchBooks);

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

export const BookTileList = createBookTileList(defaultFetchBooks);
