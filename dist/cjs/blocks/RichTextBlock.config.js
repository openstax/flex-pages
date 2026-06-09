"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'text',
    categories: ['content'],
    label: 'Text',
    description: 'A block of rich text with full inline formatting options.',
    field: { name: 'text', label: 'Text', type: 'rich-text', required: true },
};
