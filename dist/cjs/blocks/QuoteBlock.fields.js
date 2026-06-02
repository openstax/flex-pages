"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fields = void 0;
const Image_1 = require("../components/Image");
exports.fields = {
    type: 'quote',
    categories: ['content'],
    label: 'Quote',
    fields: [
        { name: 'content', label: 'Quote Text', type: 'long-text', required: true },
        { name: 'title', label: 'Quotee\'s title', type: 'text' },
        { name: 'name', label: 'Quotee\'s name', type: 'text', required: true },
        { name: 'image', label: 'Image', type: 'namespace', fields: Image_1.imageFieldsConfig },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'accent_color', label: 'Accent Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex color for the quote mark' },
            ] },
    ],
};
