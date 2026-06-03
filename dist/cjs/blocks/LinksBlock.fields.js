"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fields = void 0;
const Link_fields_1 = require("../components/Link.fields");
exports.fields = {
    type: 'links_group',
    categories: ['content'],
    label: 'Links',
    fields: [
        { name: 'links', label: 'Links', type: 'list', fields: Link_fields_1.linkFieldConfig },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
                { name: 'color', label: 'Color', type: 'select', options: [
                        { value: 'white', label: 'White' },
                        { value: 'blue', label: 'Blue' },
                        { value: 'deep-green', label: 'Deep Green' },
                    ] },
                { name: 'custom_color', label: 'Custom Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex color override. Overrides Color preset.' },
                { name: 'size', label: 'Size', type: 'select', options: [
                        { value: 'small', label: 'Small' },
                        { value: 'large', label: 'Large' },
                    ] },
                { name: 'layout', label: 'Layout', type: 'select', options: [
                        { value: 'grid', label: 'Grid' },
                        { value: 'inline', label: 'Inline' },
                    ] },
            ] },
    ],
};
