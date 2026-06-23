'use client';
import React from 'react';
import type { BookData, FetchBooks } from './fetchBooks.js';

// Resolves display data for the given book UUIDs, keyed by UUID. Returns an
// empty map until the fetch resolves; tiles render their configured chrome
// (badge, menu) immediately and fill in cover/title as data arrives.
export function useBooks(ids: string[], fetchBooks: FetchBooks): Record<string, BookData> {
  const [books, setBooks] = React.useState<Record<string, BookData>>({});
  const idsKey = ids.join(',');

  React.useEffect(() => {
    let active = true;
    fetchBooks(idsKey ? idsKey.split(',') : [])
      .then((result) => {
        if (active) setBooks(result);
      })
      .catch(() => {
        // a failed lookup leaves tiles without cover/title; the block still
        // renders its configured links rather than throwing the whole page.
      });
    return () => {
      active = false;
    };
  }, [idsKey, fetchBooks]);

  return books;
}
