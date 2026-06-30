import type { Article } from '../lib/fetchArticles.js';

// Config-only module (no client component) for the Rice News Cards block.
// Articles render through the renderer's Cards block, so `config` mirrors its
// styling options. `prefetched` is hydrated server-side by mapPageNodes.

// One styling config entry, forwarded verbatim to the renderer's Cards block.
export interface NewsCardConfig {
  type: string;
  id?: string;
  value: string;
}

export interface NewsCardListBlockConfig {
  id: string;
  type: 'news_card_list';
  value: {
    count?: number;
    button_text?: string;
    summary_words?: number;
    show_image?: string;
    tag_id?: string;
    config?: NewsCardConfig[];
  };
  prefetched?: Article[];
}

export const config = {
  type: 'news_card_list',
  categories: ['content'],
  label: 'Rice News Cards',
  description:
    'A grid of cards showing the most recent articles from the Rice News feed. Each card shows the publication month and year, the article title, the summary, and a link to the full article. Uses the standard card layout.',
  fields: [
    {name: 'count', label: 'Number of Articles', type: 'number',
      help: 'How many of the most recent articles to display (default: 3).'},
    {name: 'button_text', label: 'Link Text', type: 'text',
      help: 'Call-to-action label shown on each card (default: "Read more").'},
    {name: 'summary_words', label: 'Summary Word Limit', type: 'number',
      help: 'Trim each summary to at most this many words. Leave blank for the full summary.'},
    {name: 'show_image', label: 'Featured Image', type: 'select', options: [
      {label: 'Hide', value: 'hide'},
      {label: 'Show', value: 'show'},
    ], help: 'Show each article\'s featured image at the top of its card.'},
    {name: 'tag_id', label: 'Tag ID', type: 'text',
      help: 'Rice news taxonomy term id to filter by (default: 1236, the OpenStax news tag).'},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'card_style', label: 'Style', type: 'select', options: [
        {label: 'Rounded', value: 'rounded'},
        {label: 'Square', value: 'square'},
      ]},
      {name: 'card_size', label: 'Size', help: 'A single number representing 10px increments', type: 'number'},
      {name: 'card_columns', label: 'Columns', help: 'Number of columns (works with Size)', type: 'number'},
      {name: 'accent_colors', label: 'Accent Colors', type: 'text', help: 'Comma-separated hex colors for card borders/shadows, e.g. #ff0000,#00ff00,#0000ff'},
      {name: 'divider_colors', label: 'Divider Colors', type: 'text', help: 'Comma-separated hex colors for card divider lines, e.g. #ff0000,#00ff00'},
      {name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex background color for cards'},
      {name: 'border_size', label: 'Border Size', type: 'number', help: 'Border thickness in pixels. Rounded: border width (default: 1px). Square: top accent height (default: 10px).'},
    ]},
  ],
};
