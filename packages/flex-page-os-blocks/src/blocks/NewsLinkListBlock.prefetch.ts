import { fetchArticles as defaultFetchArticles, DEFAULT_ARTICLE_COUNT } from '../lib/fetchArticles.js';
import type { FetchArticles } from '../lib/fetchArticles.js';
import type { NewsLinkListBlockConfig } from './NewsLinkListBlock.config.js';

// Server-side loader (directive-free); same article load as the card variant.
export function createNewsLinkPrefetch(fetchArticles: FetchArticles) {
  return (value: NewsLinkListBlockConfig['value']) =>
    fetchArticles({ count: value.count ?? DEFAULT_ARTICLE_COUNT, tagId: value.tag_id });
}

export const prefetch = createNewsLinkPrefetch(defaultFetchArticles);
