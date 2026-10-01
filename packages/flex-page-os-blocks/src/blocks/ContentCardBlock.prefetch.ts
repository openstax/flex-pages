import { fetchContent as defaultFetchContent } from '../lib/fetchContent.js';
import type { ContentData, FetchContent } from '../lib/fetchContent.js';
import type { ContentCardValue } from './ContentCardBlock.config.js';

/*
 * Server-side data loader for the content card, in a directive-free module (like
 * book_tile_list's prefetch) so mapPageNodes can invoke it on the server. Reads
 * the single reference off the block value and resolves its display data; the
 * result is attached to the node as `prefetched`.
 */
export function createContentCardPrefetch(fetchContent: FetchContent) {
  return async (value: ContentCardValue): Promise<ContentData | undefined> => {
    const ref = value.reference;
    if (!ref) return undefined;
    const byId = await fetchContent([{ id: ref.id, type: ref.type }]);
    return byId[ref.id];
  };
}

export const prefetch = createContentCardPrefetch(defaultFetchContent);
