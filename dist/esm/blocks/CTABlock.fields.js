import { linkFieldConfig } from '../components/Link.fields';
export const ctaLinkFieldConfig = [
    ...linkFieldConfig,
    { name: 'config', label: 'Config', type: 'configs', configs: [
            { name: 'style', label: 'Style', type: 'select', options: [
                    { label: 'Orange', value: 'orange' },
                    { label: 'White', value: 'white' },
                    { label: 'Blue Outline', value: 'blue_outline' },
                    { label: 'Deep Green Outline', value: 'deep_green_outline' },
                ] },
            { name: 'custom_color', label: 'Custom Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex color override. Overrides Style preset.' },
        ] },
];
export const fields = {
    type: 'cta_block',
    categories: ['content'],
    label: 'Call to Action',
    fields: [
        { name: 'description', label: 'Description', type: 'rich-text' },
        { name: 'actions', label: 'Actions', type: 'list', fields: ctaLinkFieldConfig },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
                { name: 'layout', label: 'Layout', type: 'select', options: [
                        { label: 'Inline', value: 'inline' },
                    ] },
                { name: 'rendering_condition', label: 'Rendering Condition', type: 'text',
                    help: 'Comma-separated condition slugs. Block renders only when at least one is active.' },
            ] },
    ],
};
