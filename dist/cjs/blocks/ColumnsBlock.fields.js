"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fields = void 0;
exports.fields = {
    type: 'columns',
    label: 'Columns',
    categories: ['structure'],
    fields: [
        { name: 'leftContent', label: 'Left Column Content', type: 'blocks', categories: ['content'] },
        { name: 'rightContent', label: 'Right Column Content', type: 'blocks', categories: ['content'] },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}' },
                { name: 'gradient_color', label: 'Gradient To Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}',
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
                { name: 'flex', label: 'Height', type: 'select', options: [
                        { label: 'Grow to fill available page space', value: 'flex-grow' },
                        { label: 'Shrink to fit available page space', value: 'flex-shrink' },
                        { label: 'Fit to available page space', value: 'flex' },
                    ] },
                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
                { name: 'id', label: 'ID', help: 'The HTML id of the section (can be referenced by anchor links).', type: 'text' },
                { name: 'gap', label: 'Column Gap', help: 'The space between the columns, in 10px increments', type: 'number' },
                { name: 'stack_at', label: 'Stack Below Width', help: 'Column width at which the two columns stack vertically (CSS length, e.g. 60em, 400px). Defaults to 60em.', type: 'text' },
                { name: 'right_size', label: 'Right Column Size', help: 'CSS text for the right column eg (20rem, 30%)', type: 'text',
                    disabledWhen: (data) => { var _a; return !!((_a = data === null || data === void 0 ? void 0 : data.config) === null || _a === void 0 ? void 0 : _a.find((c) => c.name === 'left_size')); }
                },
                { name: 'left_size', label: 'Left Column Size', help: 'CSS text for the left column eg (20rem, 30%)', type: 'text',
                    disabledWhen: (data) => { var _a; return !!((_a = data === null || data === void 0 ? void 0 : data.config) === null || _a === void 0 ? void 0 : _a.find((c) => c.name === 'right_size')); }
                },
            ] },
    ],
};
