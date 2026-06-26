'use client';
import React from 'react';
// Resolves display data for the given book UUIDs, keyed by UUID. When the host
// has already hydrated the data server-side (`prefetched`), returns it and skips
// the client fetch entirely — no request, no layout shift. Otherwise fetches on
// mount, returning an empty map until it resolves (tiles render their configured
// chrome immediately and fill in cover/title as data arrives).
export function useBooks(ids, fetchBooks, prefetched) {
    const [books, setBooks] = React.useState({});
    const idsKey = ids.join(',');
    const hasPrefetch = Boolean(prefetched);
    React.useEffect(() => {
        if (hasPrefetch)
            return;
        let active = true;
        fetchBooks(idsKey ? idsKey.split(',') : [])
            .then((result) => {
            if (active)
                setBooks(result);
        })
            .catch(() => {
            // a failed lookup leaves tiles without cover/title; the block still
            // renders its configured links rather than throwing the whole page.
        });
        return () => {
            active = false;
        };
    }, [idsKey, fetchBooks, hasPrefetch]);
    return prefetched !== null && prefetched !== void 0 ? prefetched : books;
}
