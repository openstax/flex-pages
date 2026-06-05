"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'section',
    categories: ['structure'],
    label: 'Section',
    fields: [
        { name: 'content', label: 'Section Content', type: 'blocks', categories: ['content'], required: true },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'text_alignment', label: 'Text Alignment', type: 'select', options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Right', value: 'right' },
                        { label: 'Center', value: 'center' },
                    ] },
                { name: 'flex', label: 'Height', type: 'select', options: [
                        { label: 'Grow to fill available page space', value: 'flex-grow' },
                        { label: 'Shrink to fit available page space', value: 'flex-shrink' },
                        { label: 'Fit to available page space', value: 'flex' },
                    ] },
                { name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-F0-9]{6}' },
                { name: 'gradient_color', label: 'Gradient To Color', type: 'text', pattern: '#[a-fA-F0-9]{6}',
                    help: 'Second color for gradient effect. Background Color is the starting color.' },
                { name: 'gradient_direction', label: 'Gradient Direction', type: 'select', options: [
                        { label: 'Top to Bottom', value: 'to bottom' },
                        { label: 'Bottom to Top', value: 'to top' },
                        { label: 'Left to Right', value: 'to right' },
                        { label: 'Right to Left', value: 'to left' },
                        { label: 'Top-Left to Bottom-Right', value: 'to bottom right' },
                        { label: 'Top-Right to Bottom-Left', value: 'to bottom left' },
                        { label: 'Bottom-Left to Top-Right', value: 'to top right' },
                        { label: 'Bottom-Right to Top-Left', value: 'to top left' },
                    ] },
                { name: 'padding', label: 'Padding', help: 'Top and Bottom padding, in 10px increments', type: 'number' },
                { name: 'padding_top', label: 'Padding Top', help: 'Top padding, in 10px increments', type: 'number' },
                { name: 'padding_bottom', label: 'Padding Bottom', help: 'Bottom padding, in 10px increments', type: 'number' },
                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
                { name: 'id', label: 'ID', help: 'The HTML id of the section (can be referenced by anchor links).', type: 'text' },
                { name: 'rendering_condition', label: 'Rendering Condition', type: 'text',
                    help: 'Comma-separated condition slugs. Block renders only when at least one is active.' },
            ] },
    ],
};
