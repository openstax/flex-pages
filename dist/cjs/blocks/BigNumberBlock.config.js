"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'big_number',
    categories: ['content', 'stat'],
    label: 'Big Number',
    description: 'A large statistic with an optional caption, e.g. "8M+ learners".',
    fields: [
        { name: 'number', label: 'Number', type: 'text', required: true, help: 'The statistic to display large, e.g. 8M+.' },
        { name: 'caption', label: 'Caption', type: 'text', help: 'Optional supporting text shown below the number.' },
        { name: 'color', label: 'Color', type: 'select', help: 'Brand color for the number. Defaults to the inherited text color.', options: [
                { label: 'Default', value: '' },
                { label: 'Blue', value: 'blue' },
                { label: 'Green', value: 'green' },
                { label: 'Orange', value: 'orange' },
            ] },
    ],
};
