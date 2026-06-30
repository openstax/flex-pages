'use client';
import React from 'react';
import type { Article, FetchArticles } from './fetchArticles.js';

// Returns `prefetched` when present (skipping the client fetch), else fetches
// on mount. Mirrors useBooks.
export function useArticles(
  count: number,
  tagId: string | undefined,
  fetchArticles: FetchArticles,
  prefetched?: Article[],
): Article[] {
  const [articles, setArticles] = React.useState<Article[]>([]);
  const hasPrefetch = Boolean(prefetched);

  React.useEffect(() => {
    if (hasPrefetch) return;
    let active = true;
    fetchArticles({ count, tagId })
      .then((result) => {
        if (active) setArticles(result);
      })
      .catch(() => {
        // a failed lookup leaves the block empty rather than throwing the page.
      });
    return () => {
      active = false;
    };
  }, [count, tagId, fetchArticles, hasPrefetch]);

  return prefetched ?? articles;
}
