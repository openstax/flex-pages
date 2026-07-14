import { ctaLinkFieldConfig, CTALinkFields } from './CTABlock.config.js';

type CardConfig = {
  type: 'card_style';
  id: string;
  value: 'rounded' | 'square';
} | {
  type: 'layout';
  id: string;
  value: 'grid' | 'masonry';
} | {
  type: 'card_size';
  id: string;
  value: string;
} | {
  type: 'card_columns';
  id: string;
  value: string;
} | {
  type: 'card_min_size';
  id: string;
  value: string;
} | {
  type: 'background_color';
  id: string;
  value: string;
} | {
  type: 'border_size';
  id: string;
  value: string;
} | {
  type: 'accent_size';
  id: string;
  value: string;
} | {
  type: 'padding';
  id: string;
  value: string;
} | {
  type: 'padding_top';
  id: string;
  value: string;
} | {
  type: 'padding_bottom';
  id: string;
  value: string;
};

export type CardBlockConfig = {
  text: string;
  ctaBlock: CTALinkFields[];
  accentColor?: string;
  dividerColor?: string;
};

export type CardsBlockConfig = {
  id: string;
  type: 'cards_block';
  value: {
    cards: CardBlockConfig[];
    config: CardConfig[];
  };
};

export const config = {
  type: 'cards_block',
  label: 'Cards Block',
  categories: ['content'],
  description: 'A wrapping grid of card tiles, each holding rich text and an optional call-to-action button.',
  fields: [
    {name: 'cards', label: 'Cards', type: 'list', fields: [
      {name: 'text', label: 'Card Text', type: 'rich-text', required: true},
      {name: 'ctaBlock', label: 'Call To Action', type: 'list', fields: ctaLinkFieldConfig, max: 1},
      {name: 'accentColor', label: 'Accent Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex accent color for this card: the border on rounded style, the top accent bar on square (needs Accent Size). Leave blank for the default palette.'},
      {name: 'dividerColor', label: 'Divider Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex color for divider lines in this card. Leave blank for the default palette.'},
    ]},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'card_style', label: 'Style', type: 'select', options: [
        {label: 'Rounded', value: 'rounded'},
        {label: 'Square', value: 'square'},
      ]},
      {name: 'layout', label: 'Layout', type: 'select', options: [
        {label: 'Grid', value: 'grid'},
        {label: 'Masonry-style columns, packed by height', value: 'masonry'},
      ]},
      {name: 'card_size', label: 'Size', help: 'A single number representing 10px increments. Grid layout only.', type: 'number'},
      {name: 'card_columns', label: 'Columns', help: 'Maximum cards per row. Rows reflow to fewer columns as the container narrows; set Min card width to control when. Grid layout only.', type: 'number'},
      {name: 'card_min_size', label: 'Min card width', help: 'Smallest a card gets before the grid wraps to fewer columns, in 10px increments (e.g. 18 = 180px). Defaults to 18. Grid layout only.', type: 'number'},
      {name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex background color for cards'},
      {name: 'border_size', label: 'Border Size', type: 'number', help: 'Outer border width in px, all sides. Leave blank for the style default; 0 = no border.'},
      {name: 'accent_size', label: 'Accent Size', type: 'number', help: 'Top accent bar height in px, independent of the border. Color comes from each card\'s Accent Color (or a default palette).'},
      {name: 'padding', label: 'Padding', type: 'number', help: 'Top and bottom spacing around the block, in 10px increments.'},
      {name: 'padding_top', label: 'Padding Top', type: 'number', help: 'Top spacing around the block, in 10px increments.'},
      {name: 'padding_bottom', label: 'Padding Bottom', type: 'number', help: 'Bottom spacing around the block, in 10px increments.'},
    ]},
  ],
};
