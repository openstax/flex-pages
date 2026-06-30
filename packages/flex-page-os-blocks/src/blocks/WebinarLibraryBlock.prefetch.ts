import { fetchWebinars as defaultFetchWebinars, selectPast } from '../lib/fetchWebinars.js';
import type { FetchWebinars } from '../lib/fetchWebinars.js';

// Server-side loader (directive-free): all past webinars, most recent first.
// Subject filtering happens client-side in the component.
export function createLibraryPrefetch(fetchWebinars: FetchWebinars) {
  return () => fetchWebinars().then((all) => selectPast(all, new Date()));
}

export const prefetch = createLibraryPrefetch(defaultFetchWebinars);
