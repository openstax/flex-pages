'use client';
import React from 'react';
// Resolves display data for one content reference. When the host hydrated it
// server-side (`prefetched`), returns it and skips the client fetch. Otherwise
// fetches on mount, returning undefined until it resolves (the card renders its
// reference fallbacks immediately and fills in image/excerpt as data arrives).
export function useContent(ref, fetchContent, prefetched) {
    const [data, setData] = React.useState(undefined);
    const hasPrefetch = Boolean(prefetched);
    const refId = ref.id;
    const refType = ref.type;
    React.useEffect(() => {
        if (hasPrefetch)
            return;
        let active = true;
        fetchContent([{ id: refId, type: refType }])
            .then((byId) => {
            if (active)
                setData(byId[refId]);
        })
            .catch(() => {
            // a failed lookup leaves the card on its reference fallbacks; it still
            // renders rather than throwing the whole page.
        });
        return () => { active = false; };
    }, [refId, refType, fetchContent, hasPrefetch]);
    return prefetched !== null && prefetched !== void 0 ? prefetched : data;
}
