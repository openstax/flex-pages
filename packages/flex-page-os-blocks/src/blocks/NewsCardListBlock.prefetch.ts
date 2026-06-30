import { fetchArticles as defaultFetchArticles, DEFAULT_ARTICLE_COUNT } from '../lib/fetchArticles.js';
import type { FetchArticles } from '../lib/fetchArticles.js';
import type { NewsCardListBlockConfig } from './NewsCardListBlock.config.js';

// Server-side loader (directive-free so mapPageNodes can call it); its result is
// attached to the node as `prefetched`.
export function createNewsPrefetch(fetchArticles: FetchArticles) {
  return (value: NewsCardListBlockConfig['value']) =>
    fetchArticles({ count: value.count ?? DEFAULT_ARTICLE_COUNT, tagId: value.tag_id });
}

export const prefetch = createNewsPrefetch(defaultFetchArticles);
