import type { Webinar } from '../lib/fetchWebinars.js';

// Config-only module for the Featured Webinar block. `prefetched` (the chosen
// webinar, as a 0/1-length list) is hydrated server-side by mapPageNodes.

export interface WebinarHighlightBlockConfig {
  id: string;
  type: 'webinar_highlight';
  value: {
    webinar_id?: number;
    eyebrow?: string;
  };
  prefetched?: Webinar[];
}

export const config = {
  type: 'webinar_highlight',
  categories: ['content'],
  label: 'Featured Webinar',
  description: 'Highlights a single webinar prominently, chosen by its id from the webinars feed.',
  fields: [
    {name: 'webinar_id', label: 'Webinar ID', type: 'number', required: true,
      help: 'The id of the webinar to feature, from the webinars feed.'},
    {name: 'eyebrow', label: 'Eyebrow Label', type: 'text',
      help: 'Small label shown above the webinar (default: "Featured webinar").'},
  ],
};
