import type { Webinar } from '../lib/fetchWebinars.js';

// Config-only module for the Upcoming Webinars block. `prefetched` (the upcoming
// list) is hydrated server-side by mapPageNodes.

export interface WebinarUpcomingBlockConfig {
  id: string;
  type: 'webinar_upcoming';
  value: {
    count?: number;
    subject?: string;
    description_words?: number;
    per_page?: number;
    cta_text?: string;
  };
  prefetched?: Webinar[];
}

export const config = {
  type: 'webinar_upcoming',
  categories: ['content'],
  label: 'Upcoming Webinars',
  description: 'A grid of upcoming OpenStax webinars (soonest first), each with its date, speakers, collection tags, and a register link.',
  fields: [
    {name: 'count', label: 'Number of Webinars', type: 'number',
      help: 'How many upcoming webinars to show (default: 3).'},
    {name: 'subject', label: 'Subject', type: 'text',
      help: 'Optional. Show only webinars tagged with this subject, e.g. Science.'},
    {name: 'description_words', label: 'Description Word Limit', type: 'number',
      help: 'Trim each description to at most this many words. Leave blank for the full text.'},
    {name: 'per_page', label: 'Per Page', type: 'number',
      help: 'Show this many at a time with Previous/Next controls. Leave blank to show all at once.'},
    {name: 'cta_text', label: 'Call-to-action Text', type: 'text',
      help: "Override the link label on every card, e.g. Register now. Leave blank to use each webinar's own text."},
  ],
};
