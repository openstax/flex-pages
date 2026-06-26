import { ctaLinkFieldConfig, CTALinkFields } from './CTABlock.config.js';

type CardConfig = {
  type: 'card_style';
  id: string;
  value: 'rounded' | 'square';
} | {
  type: 'card_size';
  id: string;
  value: string;
} | {
  type: 'card_columns';
  id: string;
  value: string;
} | {
  type: 'accent_colors';
  id: string;
  value: string;
} | {
  type: 'divider_colors';
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
    ]},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'card_style', label: 'Style', type: 'select', options: [
        {label: 'Rounded', value: 'rounded'},
        {label: 'Square', value: 'square'},
      ]},
      {name: 'card_size', label: 'Size', help: 'A single number representing 10px increments', type: 'number'},
      {name: 'card_columns', label: 'Columns', help: 'Maximum cards per row. Rows reflow to fewer columns as the container narrows. Optionally pair with Size to set the minimum card width before wrapping.', type: 'number'},
      {name: 'accent_colors', label: 'Accent Colors', type: 'text', help: 'Comma-separated hex colors for the top accent bar, cycled per card (needs Accent Size). e.g. #ff0000,#00ff00,#0000ff'},
      {name: 'divider_colors', label: 'Divider Colors', type: 'text', help: 'Comma-separated hex colors for card divider lines, cycled per card. e.g. #ff0000,#00ff00'},
      {name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex background color for cards'},
      {name: 'border_size', label: 'Border Size', type: 'number', help: 'Outer border width in px, all sides. Leave blank for the style default; 0 = no border.'},
      {name: 'accent_size', label: 'Accent Size', type: 'number', help: 'Top accent bar height in px, independent of the border. Color comes from Accent Colors (or a default palette).'},
      {name: 'padding', label: 'Padding', type: 'number', help: 'Top and bottom spacing around the block, in 10px increments.'},
      {name: 'padding_top', label: 'Padding Top', type: 'number', help: 'Top spacing around the block, in 10px increments.'},
      {name: 'padding_bottom', label: 'Padding Bottom', type: 'number', help: 'Bottom spacing around the block, in 10px increments.'},
    ]},
  ],
};
