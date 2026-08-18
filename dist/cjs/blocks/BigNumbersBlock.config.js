"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'big_numbers',
    categories: ['content'],
    label: 'Big Numbers',
    description: 'A row of Big Number blocks that reflows to fewer per row as space narrows, e.g. an impact-stats band.',
    fields: [
        { name: 'content', label: 'Numbers', type: 'blocks', categories: ['stat'] },
    ],
};
