import type { Webinar } from '../lib/fetchWebinars.js';

// Config-only module for the Webinar Library block (past webinars, filterable by
// subject). `prefetched` (the past list) is hydrated server-side by mapPageNodes.

export interface WebinarLibraryBlockConfig {
  id: string;
  type: 'webinar_library';
  value: {
    show?: 'past' | 'upcoming' | 'all';
    default_subject?: string;
    count?: number;
    description_words?: number;
    per_page?: number;
    future_cta_text?: string;
    past_cta_text?: string;
  };
  prefetched?: Webinar[];
}

export const config = {
  type: 'webinar_library',
  categories: ['content'],
  label: 'Webinar Library',
  description: 'A library of OpenStax webinars, filterable by subject. Show past, upcoming, or all webinars, with separate call-to-action text for each. Each webinar shows its collections as tags.',
  fields: [
    {name: 'show', label: 'Show', type: 'select',
      help: 'Which webinars to list.',
      options: [
        {label: 'Past', value: 'past'},
        {label: 'Upcoming', value: 'upcoming'},
        {label: 'All', value: 'all'},
      ]},
    {name: 'default_subject', label: 'Default Subject Filter', type: 'text',
      help: 'Optional. Pre-select this subject in the filter, e.g. Science. Readers can change it.'},
    {name: 'count', label: 'Number of Webinars', type: 'number',
      help: 'Maximum webinars to show (after filtering). Leave blank to show all.'},
    {name: 'description_words', label: 'Description Word Limit', type: 'number',
      help: 'Trim each description to at most this many words. Leave blank for the full text.'},
    {name: 'per_page', label: 'Per Page', type: 'number',
      help: 'Show this many at a time with Previous/Next controls. Leave blank to show all at once.'},
    {name: 'future_cta_text', label: 'Upcoming Call-to-action Text', type: 'text',
      help: "Link label on upcoming webinars, e.g. Register now. Leave blank to use each webinar's own text."},
    {name: 'past_cta_text', label: 'Past Call-to-action Text', type: 'text',
      help: "Link label on past webinars, e.g. Watch recording. Leave blank to use each webinar's own text."},
  ],
};
