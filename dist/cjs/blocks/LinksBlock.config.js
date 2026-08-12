"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const Link_config_js_1 = require("../components/Link.config.js");
exports.config = {
    type: 'links_group',
    categories: ['content'],
    label: 'Links',
    description: 'A group of links rendered as a grid or inline row, with configurable color and size.',
    fields: [
        { name: 'links', label: 'Links', type: 'list', fields: Link_config_js_1.linkFieldConfig },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
                { name: 'style', label: 'Style', type: 'select', help: 'Button renders the links as buttons (default); Text renders them as plain links.', options: [
                        { value: 'button', label: 'Button' },
                        { value: 'text', label: 'Text' },
                    ] },
                { name: 'color', label: 'Color', type: 'select', help: 'Applies to the Button style only; ignored when Style is Text.', options: [
                        { value: 'white', label: 'White' },
                        { value: 'blue', label: 'Blue' },
                        { value: 'deep-green', label: 'Deep Green' },
                    ] },
                { name: 'custom_color', label: 'Custom Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex color override (Button style only). Overrides the Color preset.' },
                { name: 'size', label: 'Size', type: 'select', help: 'Applies to the Button style only; ignored when Style is Text.', options: [
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
