"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'accordion',
    label: 'Accordion',
    categories: ['content'],
    fields: [
        { name: 'items', label: 'Items', type: 'list', fields: [
                { name: 'header', label: 'Header', type: 'text', required: true },
                { name: 'content', label: 'Content', type: 'rich-text', required: true },
                { name: 'id', label: 'ID', type: 'text',
                    help: 'The HTML id of the item (can be referenced by anchor links).' },
            ] },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'heading_level', label: 'Heading Level', type: 'select',
                    help: 'Heading level for each item, for the document outline and screen-reader navigation',
                    options: [
                        { label: 'H2', value: '2' },
                        { label: 'H3', value: '3' },
                        { label: 'H4', value: '4' },
                    ] },
                { name: 'allow_multiple', label: 'Allow Multiple Open', type: 'select',
                    help: 'Allow more than one panel to be open at the same time',
                    options: [
                        { label: 'No', value: 'false' },
                        { label: 'Yes', value: 'true' },
                    ] },
                { name: 'accent_color', label: 'Accent Color', type: 'text', pattern: '#[a-fA-F0-9]{6}',
                    help: 'Hex color for the expand/collapse icon' },
            ] },
    ],
};
