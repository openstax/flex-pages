import { fetchWebinars as defaultFetchWebinars, selectUpcoming, DEFAULT_UPCOMING_COUNT } from '../lib/fetchWebinars.js';
import type { FetchWebinars } from '../lib/fetchWebinars.js';
import type { WebinarUpcomingBlockConfig } from './WebinarUpcomingBlock.config.js';

// Server-side loader (directive-free). Upcoming is resolved against the build/
// request clock — on the static export that's a build-time snapshot.
export function createUpcomingPrefetch(fetchWebinars: FetchWebinars) {
  return (value: WebinarUpcomingBlockConfig['value']) =>
    fetchWebinars().then((all) =>
      selectUpcoming(all, new Date(), {subject: value.subject || undefined, limit: value.count ?? DEFAULT_UPCOMING_COUNT}));
}

export const prefetch = createUpcomingPrefetch(defaultFetchWebinars);
