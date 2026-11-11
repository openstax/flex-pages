import type { ImageFields } from '@openstax/flex-page-renderer/components/Image.config';
import type { ContentData } from '../lib/fetchContent.js';

/*
 * Serializable block config + types for the content card, kept directive-free
 * (like book_tile_list) so server/data-only consumers can import it. The block
 * links a card to another CMS page: `reference` is the lean reference emitted by
 * the openstax-cms ContentChooserBlock; title/image/excerpt are optional per-card
 * overrides. Display data is hydrated by reference (see ContentCardBlock.prefetch).
 */
export const config = {
  type: 'content_card',
  categories: ['content'],
  label: 'Content Card',
  description:
    'A card linked to another page on the site. Title, image, and excerpt are pulled from the referenced page by default; each can be overridden per card.',
  fields: [
    {name: 'reference', label: 'Page', type: 'content-reference', required: true,
      help: 'The page this card links to.'},
    {name: 'title', label: 'Title Override', type: 'text',
      help: 'Overrides the referenced page\'s title for this card.'},
    {name: 'image', label: 'Image Override', type: 'image',
      help: 'Overrides the referenced page\'s image for this card.'},
    {name: 'excerpt', label: 'Excerpt Override', type: 'text',
      help: 'Overrides the referenced page\'s excerpt for this card.'},
  ],
};

// The lean reference emitted by openstax-cms ContentChooserBlock.get_api_representation.
export interface ContentReference {
  id: string;
  type: string;
  slug: string;
  url: string;
  title: string;
}

export interface ContentCardValue {
  reference: ContentReference;
  title?: string;
  image?: ImageFields;
  excerpt?: string;
}

export interface ContentCardBlockConfig {
  id: string;
  type: 'content_card';
  value: ContentCardValue;
  // display data hydrated server-side by mapPageNodes (see the prefetch module)
  prefetched?: ContentData;
}
