import type { ImageFields } from '@openstax/flex-page-renderer/components/Image.config';
import type { CardGridConfigOption } from '@openstax/flex-page-renderer/blocks/CardGrid.config';

export type PersonLinkType = 'linkedin' | 'orcid' | 'website' | 'email' | 'scholar' | 'x';

export interface PersonLink {
  type: PersonLinkType;
  url: string;
}

export interface PersonTag {
  id: number;
  name: string;
  slug: string;
}

export interface PersonConfig {
  name: string;
  title?: string;
  image?: ImageFields;
  short_bio?: string;
  full_bio?: string;
  links: PersonLink[];
  tags: PersonTag[];
}

export interface PersonBlockConfig {
  id: string;
  type: 'person';
  value: {
    heading?: string;
    people: PersonConfig[];
    config: CardGridConfigOption[];
  };
}

export const config = {
  type: 'person',
  categories: ['content'],
  label: 'People',
  description:
    'A grid of person cards (name, title, photo, short bio, links, tags). A person with a full bio gets a clickable card that opens an expanded modal. Reuses the cards grid layout/config.',
  fields: [
    {name: 'heading', label: 'Heading', type: 'text'},
    {name: 'people', label: 'People', type: 'list', fields: [
      {name: 'name', label: 'Name', type: 'text', required: true},
      {name: 'title', label: 'Title / Role', type: 'text'},
      {name: 'image', label: 'Photo', type: 'image'},
      {name: 'short_bio', label: 'Short Bio', type: 'text'},
      {name: 'full_bio', label: 'Full Bio', type: 'rich-text',
        help: 'If set, the card opens an expanded modal.'},
      {name: 'links', label: 'Links', type: 'list', fields: [
        {name: 'type', label: 'Type', type: 'select', options: [
          {label: 'LinkedIn', value: 'linkedin'},
          {label: 'ORCID', value: 'orcid'},
          {label: 'Website', value: 'website'},
          {label: 'Email', value: 'email'},
          {label: 'Google Scholar', value: 'scholar'},
          {label: 'X', value: 'x'},
        ]},
        {name: 'url', label: 'URL', type: 'text', required: true},
      ]},
    ]},
    // `tags` are authored CMS-side (snippet chooser) and arrive pre-serialized; no editor field here.
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'card_style', label: 'Style', type: 'select', options: [
        {label: 'Rounded', value: 'rounded'},
        {label: 'Square', value: 'square'},
      ]},
      {name: 'card_size', label: 'Size', type: 'number', help: 'A single number representing 10px increments'},
      {name: 'card_columns', label: 'Columns', type: 'number'},
      {name: 'accent_colors', label: 'Accent Colors', type: 'text', help: 'Comma-separated hex colors'},
      {name: 'divider_colors', label: 'Divider Colors', type: 'text', help: 'Comma-separated hex colors'},
      {name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-F0-9]{6}'},
      {name: 'border_size', label: 'Border Size', type: 'number'},
    ]},
  ],
};
