import type { Article } from '../lib/fetchArticles.js';

// Config-only module for the Rice News Links block — the list variant of
// news_card_list, sharing the same article loader. `prefetched` is hydrated
// server-side by mapPageNodes.

export interface NewsLinkListBlockConfig {
  id: string;
  type: 'news_link_list';
  value: {
    count?: number;
    show_image?: string;
    tag_id?: string;
  };
  prefetched?: Article[];
}

export const config = {
  type: 'news_link_list',
  categories: ['content'],
  label: 'Rice News Links',
  description:
    'A compact list of the most recent articles from the Rice News feed, each rendered as a title link with the publication month and year as an inline caption. The list variant of the Rice News Cards block.',
  fields: [
    {name: 'count', label: 'Number of Articles', type: 'number',
      help: 'How many of the most recent articles to display (default: 3).'},
    {name: 'show_image', label: 'Featured Image', type: 'select', options: [
      {label: 'Hide', value: 'hide'},
      {label: 'Show', value: 'show'},
    ], help: 'Show each article\'s featured image as a small thumbnail to the left of the title.'},
    {name: 'tag_id', label: 'Tag ID', type: 'text',
      help: 'Rice news taxonomy term id to filter by (default: 1236, the OpenStax news tag).'},
  ],
};
