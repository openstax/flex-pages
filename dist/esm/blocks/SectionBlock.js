import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import { findByType, resolveBackground } from '../utils';
import './SectionBlock.css';
SectionBlock.blockConfig = {
    type: 'section',
    categories: ['structure'],
    label: 'Section',
    fields: [
        { name: 'content', label: 'Section Content', type: 'blocks', categories: ['content'] },
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
                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
                { name: 'id', label: 'ID', help: 'The HTML id of the section (can be referenced by anchor links).', type: 'text' },
                { name: 'rendering_condition', label: 'Rendering Condition', type: 'text',
                    help: 'Comma-separated condition slugs. Block renders only when at least one is active.' },
            ] },
    ],
};
// eslint-disable-next-line complexity
export function SectionBlock({ data, content, activeConditions }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const condition = (_a = findByType(data.value.config, 'rendering_condition')) === null || _a === void 0 ? void 0 : _a.value;
    if (condition && !condition.split(',').some(c => activeConditions === null || activeConditions === void 0 ? void 0 : activeConditions.includes(c.trim())))
        return null;
    const id = (_b = findByType(data.value.config, 'id')) === null || _b === void 0 ? void 0 : _b.value;
    const textAlign = (_c = findByType(data.value.config, 'text_alignment')) === null || _c === void 0 ? void 0 : _c.value;
    const flex = (_d = findByType(data.value.config, 'flex')) === null || _d === void 0 ? void 0 : _d.value;
    const backgroundColor = (_e = findByType(data.value.config, 'background_color')) === null || _e === void 0 ? void 0 : _e.value;
    const gradientColor = (_f = findByType(data.value.config, 'gradient_color')) === null || _f === void 0 ? void 0 : _f.value;
    const gradientDirection = (_g = findByType(data.value.config, 'gradient_direction')) === null || _g === void 0 ? void 0 : _g.value;
    const padding = (_j = (_h = findByType(data.value.config, 'padding')) === null || _h === void 0 ? void 0 : _h.value) !== null && _j !== void 0 ? _j : 0;
    const paddingTop = (_k = findByType(data.value.config, 'padding_top')) === null || _k === void 0 ? void 0 : _k.value;
    const paddingBottom = (_l = findByType(data.value.config, 'padding_bottom')) === null || _l === void 0 ? void 0 : _l.value;
    const analytics = (_m = findByType(data.value.config, 'analytics_label')) === null || _m === void 0 ? void 0 : _m.value;
    const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);
    const display = data.value.content.some(d => findByType(d.value.config, 'flex'))
        ? 'flex' : 'block';
    return _jsx("section", { id: id, className: cn('content-block-section', { 'dark-background': bg.isDark, [`content-block-${flex}`]: flex }), "data-analytics-nav": analytics, style: { background: bg.background, backgroundColor: bg.backgroundColor,
            '--padding-multiplier': padding,
            '--padding-top-multiplier': paddingTop,
            '--padding-bottom-multiplier': paddingBottom
        }, children: _jsx("div", { className: "section-content", style: { textAlign, display, flexDirection: 'column' }, children: content }) });
}
