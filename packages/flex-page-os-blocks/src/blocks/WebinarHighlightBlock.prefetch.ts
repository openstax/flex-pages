import { fetchWebinars as defaultFetchWebinars, selectById } from '../lib/fetchWebinars.js';
import type { FetchWebinars } from '../lib/fetchWebinars.js';
import type { WebinarHighlightBlockConfig } from './WebinarHighlightBlock.config.js';

// Server-side loader (directive-free): the chosen webinar as a 0/1-length list.
export function createHighlightPrefetch(fetchWebinars: FetchWebinars) {
  return (value: WebinarHighlightBlockConfig['value']) =>
    fetchWebinars().then((all) => {
      const webinar = selectById(all, value.webinar_id == null ? undefined : Number(value.webinar_id));
      return webinar ? [webinar] : [];
    });
}

export const prefetch = createHighlightPrefetch(defaultFetchWebinars);
