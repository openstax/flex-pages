'use client';
import { LinkComponent } from '@openstax/flex-page-renderer/components/Link';
import { fetchArticles as defaultFetchArticles, DEFAULT_ARTICLE_COUNT } from '../lib/fetchArticles.js';
import type { FetchArticles } from '../lib/fetchArticles.js';
import { useArticles } from '../lib/useArticles.js';
import type { NewsLinkListBlockConfig } from './NewsLinkListBlock.config.js';
import './NewsLinkListBlock.css';

// Binds an article source; the default-wired Component is the barrel export.
export function createNewsLinkList(fetchArticles: FetchArticles) {
  return function NewsLinkList({data}: {data: NewsLinkListBlockConfig}) {
    const count = data.value.count ?? DEFAULT_ARTICLE_COUNT;
    const articles = useArticles(count, data.value.tag_id, fetchArticles, data.prefetched);
    const showImage = data.value.show_image === 'show';

    const date = (article: typeof articles[number]) => article.dateLabel
      ? <span className="news-link-date">{article.dateLabel}</span>
      : null;
    const titleLink = (article: typeof articles[number]) =>
      <LinkComponent linkTarget={{type: 'url', value: article.url}} className="news-link">
        {article.title}
      </LinkComponent>;

    return <ul className="content-block-news-links">
      {articles.map((article) => (showImage && article.imageUrl)
        // Image variant: small thumbnail left of the title (+ inline date).
        ? <li key={article.id} className="news-link-item has-image">
            <img className="news-link-thumb" src={article.imageUrl} alt={article.imageAlt ?? ''} />
            <span className="news-link-text">
              {titleLink(article)}
              {date(article)}
            </span>
          </li>
        // Default: title link with the date as an inline caption.
        : <li key={article.id} className="news-link-item">
            {titleLink(article)}
            {date(article)}
          </li>
      )}
    </ul>;
  };
}

export const Component = createNewsLinkList(defaultFetchArticles);
