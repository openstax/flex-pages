'use client';
import { CardsBlock } from '@openstax/flex-page-renderer/blocks/CardsBlock.component';
import type { CardsBlockConfig } from '@openstax/flex-page-renderer/blocks/CardsBlock.config';
import { fetchArticles as defaultFetchArticles, DEFAULT_ARTICLE_COUNT } from '../lib/fetchArticles.js';
import type { Article, FetchArticles } from '../lib/fetchArticles.js';
import { useArticles } from '../lib/useArticles.js';
import type { NewsCardListBlockConfig } from './NewsCardListBlock.config.js';
import './NewsCardListBlock.css';

const DEFAULT_BUTTON_TEXT = 'Read more';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Trim to at most `maxWords` words, appending an ellipsis when truncated.
function trimToWords(text: string, maxWords?: number): string {
  if (!maxWords || maxWords <= 0) return text;
  const words = text.split(/\s+/).filter(Boolean);
  return words.length > maxWords ? `${words.slice(0, maxWords).join(' ')}…` : text;
}

// Per-card rich-text body. Uses plain h3/p and the rich-text `full-width` image
// class so cards render like regular cards; only the date keeps a class. Values
// are escaped here; the renderer also sanitizes at draw time.
function articleCardHtml(article: Article, showImage: boolean, summaryWords?: number): string {
  const summary = trimToWords(article.summary, summaryWords);
  return [
    showImage && article.imageUrl
      ? `<img class="full-width" src="${escapeHtml(article.imageUrl)}" alt="${escapeHtml(article.imageAlt ?? '')}" />`
      : '',
    article.dateLabel
      ? `<p class="news-card-date">${escapeHtml(article.dateLabel)}</p>`
      : '',
    `<h3>${escapeHtml(article.title)}</h3>`,
    summary ? `<p>${escapeHtml(summary)}</p>` : '',
  ].join('');
}

// Binds an article source; the default-wired Component is the barrel export.
export function createNewsCardList(fetchArticles: FetchArticles) {
  return function NewsCardList({data}: {data: NewsCardListBlockConfig}) {
    const count = data.value.count ?? DEFAULT_ARTICLE_COUNT;
    const articles = useArticles(count, data.value.tag_id, fetchArticles, data.prefetched);
    const buttonText = data.value.button_text || DEFAULT_BUTTON_TEXT;
    const showImage = data.value.show_image === 'show';
    const summaryWords = data.value.summary_words;

    // Map each article onto a Cards-block card (body + CTA), forwarding config.
    const cardsData: CardsBlockConfig = {
      id: data.id,
      type: 'cards_block',
      value: {
        cards: articles.map((article) => ({
          text: articleCardHtml(article, showImage, summaryWords),
          ctaBlock: [{
            text: buttonText,
            target: {type: 'url', value: article.url},
            config: [{type: 'style' as const, value: 'orange'}],
          }],
        })),
        config: (data.value.config ?? []) as CardsBlockConfig['value']['config'],
      },
    };

    return <div className="content-block-news-cards">
      <CardsBlock data={cardsData} />
    </div>;
  };
}

export const Component = createNewsCardList(defaultFetchArticles);
