import { ctaLinkFieldConfig } from './CTABlock.config.js';
export const config = {
    type: 'cards_block',
    label: 'Cards Block',
    categories: ['content'],
    description: 'A wrapping grid of card tiles, each holding rich text and an optional call-to-action button.',
    fields: [
        { name: 'cards', label: 'Cards', type: 'list', fields: [
                { name: 'text', label: 'Card Text', type: 'rich-text', required: true },
                { name: 'ctaBlock', label: 'Call To Action', type: 'list', fields: ctaLinkFieldConfig, max: 1 },
            ] },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'card_style', label: 'Style', type: 'select', options: [
                        { label: 'Rounded', value: 'rounded' },
                        { label: 'Square', value: 'square' },
                    ] },
                { name: 'card_size', label: 'Size', help: 'A single number representing 10px increments', type: 'number' },
                { name: 'card_columns', label: 'Columns', help: 'Number of columns (works with Size)', type: 'number' },
                { name: 'accent_colors', label: 'Accent Colors', type: 'text', help: 'Comma-separated hex colors for card borders/shadows, e.g. #ff0000,#00ff00,#0000ff' },
                { name: 'divider_colors', label: 'Divider Colors', type: 'text', help: 'Comma-separated hex colors for card divider lines, e.g. #ff0000,#00ff00' },
                { name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex background color for cards' },
                { name: 'border_size', label: 'Border Size', type: 'number', help: 'Border thickness in pixels. Rounded: border width (default: 1px). Square: top accent height (default: 10px).' },
            ] },
    ],
};
