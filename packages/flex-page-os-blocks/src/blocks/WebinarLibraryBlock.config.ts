import type { Webinar } from '../lib/fetchWebinars.js';

// Config-only module for the Webinar Library block (past webinars, filterable by
// subject). `prefetched` (the past list) is hydrated server-side by mapPageNodes.

export interface WebinarLibraryBlockConfig {
  id: string;
  type: 'webinar_library';
  value: {
    default_subject?: string;
    count?: number;
    description_words?: number;
    per_page?: number;
  };
  prefetched?: Webinar[];
}

export const config = {
  type: 'webinar_library',
  categories: ['content'],
  label: 'Webinar Library',
  description: 'The library of past OpenStax webinars (most recent first), filterable by subject. Each webinar shows its collections as tags.',
  fields: [
    {name: 'default_subject', label: 'Default Subject Filter', type: 'text',
      help: 'Optional. Pre-select this subject in the filter, e.g. Science. Readers can change it.'},
    {name: 'count', label: 'Number of Webinars', type: 'number',
      help: 'Maximum webinars to show (after filtering). Leave blank to show all.'},
    {name: 'description_words', label: 'Description Word Limit', type: 'number',
      help: 'Trim each description to at most this many words. Leave blank for the full text.'},
    {name: 'per_page', label: 'Per Page', type: 'number',
      help: 'Show this many at a time with Previous/Next controls. Leave blank to show all at once.'},
  ],
};
