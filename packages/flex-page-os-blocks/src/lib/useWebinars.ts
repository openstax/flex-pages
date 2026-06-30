'use client';
import React from 'react';
import type { FetchWebinars, Webinar } from './fetchWebinars.js';

// Returns `prefetched` when present (skipping the client fetch), else fetches
// all webinars and applies `select` with the client clock. `select` must be
// stable (wrap in useCallback) so the effect doesn't re-run each render.
export function useWebinars(
  fetchWebinars: FetchWebinars,
  select: (all: Webinar[], now: Date) => Webinar[],
  prefetched?: Webinar[],
): Webinar[] {
  const [list, setList] = React.useState<Webinar[]>([]);
  const hasPrefetch = Boolean(prefetched);

  React.useEffect(() => {
    if (hasPrefetch) return;
    let active = true;
    fetchWebinars()
      .then((all) => {
        if (active) setList(select(all, new Date()));
      })
      .catch(() => {
        // a failed lookup leaves the block empty rather than throwing the page.
      });
    return () => {
      active = false;
    };
  }, [hasPrefetch, fetchWebinars, select]);

  return prefetched ?? list;
}
