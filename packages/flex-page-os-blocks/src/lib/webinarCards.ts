import type { CardsBlockConfig } from '@openstax/flex-page-renderer/blocks/CardsBlock.config';
import type { Webinar } from './fetchWebinars.js';

// Renders webinars through the renderer's Cards block so they reuse the card
// chrome and styles. Only the date eyebrow, speakers, and collection tags carry
// webinar-specific classes (styled in Webinars.scss); title/description use the
// plain card + rich-text styles.

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function trimToWords(text: string, maxWords?: number): string {
  if (!maxWords || maxWords <= 0) return text;
  const words = text.split(/\s+/).filter(Boolean);
  return words.length > maxWords ? `${words.slice(0, maxWords).join(' ')}…` : text;
}

function webinarCardHtml(webinar: Webinar, descriptionWords?: number): string {
  const description = trimToWords(webinar.description, descriptionWords);
  return [
    webinar.dateLabel ? `<p class="webinar-date">${escapeHtml(webinar.dateLabel)}</p>` : '',
    `<h3>${escapeHtml(webinar.title)}</h3>`,
    webinar.speakers ? `<p class="webinar-speakers">${escapeHtml(webinar.speakers)}</p>` : '',
    description ? `<p>${escapeHtml(description)}</p>` : '',
    webinar.collections.length
      ? `<ul class="webinar-tags">${webinar.collections.map((c) => `<li class="webinar-tag">${escapeHtml(c)}</li>`).join('')}</ul>`
      : '',
  ].join('');
}

export function webinarsToCards(
  webinars: Webinar[],
  // `ctaText` overrides each webinar's own register-link text: a fixed string, or
  // a per-webinar resolver (e.g. different text for past vs future).
  opts: {id: string; descriptionWords?: number; ctaText?: string | ((webinar: Webinar) => string | undefined)},
): CardsBlockConfig {
  return {
    id: opts.id,
    type: 'cards_block',
    value: {
      cards: webinars.map((webinar) => {
        const ctaText = typeof opts.ctaText === 'function' ? opts.ctaText(webinar) : opts.ctaText;
        return {
          text: webinarCardHtml(webinar, opts.descriptionWords),
          ctaBlock: webinar.registrationUrl
            ? [{
                text: ctaText || webinar.registrationText,
                target: {type: 'url', value: webinar.registrationUrl},
                config: [{type: 'style' as const, value: 'orange'}],
              }]
            : [],
        };
      }),
      // A card style is required for the card chrome (border/padding/background).
      config: [{type: 'card_style', value: 'rounded', id: `${opts.id}-style`}],
    } as CardsBlockConfig['value'],
  };
}
