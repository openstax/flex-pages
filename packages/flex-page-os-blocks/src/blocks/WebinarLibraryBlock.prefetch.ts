import { fetchWebinars as defaultFetchWebinars, selectPast, selectUpcoming, selectAll } from '../lib/fetchWebinars.js';
import type { FetchWebinars } from '../lib/fetchWebinars.js';
import type { WebinarLibraryBlockConfig } from './WebinarLibraryBlock.config.js';

// Server-side loader (directive-free): the webinars named by `show` (past by
// default). Subject filtering happens client-side in the component.
export function createLibraryPrefetch(fetchWebinars: FetchWebinars) {
  return (value: WebinarLibraryBlockConfig['value']) => fetchWebinars().then((all) => {
    const now = new Date();
    if (value.show === 'all') return selectAll(all, now);
    if (value.show === 'upcoming') return selectUpcoming(all, now);
    return selectPast(all, now);
  });
}

export const prefetch = createLibraryPrefetch(defaultFetchWebinars);
