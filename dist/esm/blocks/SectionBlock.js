import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import Color from 'color';
import { findByType } from '../utils';
import { ContentBlocks } from '../ContentBlocks';
import './SectionBlock.css';
;
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
                { name: 'padding', label: 'Padding', help: 'Top and Bottom padding, in 10px increments', type: 'number' },
                { name: 'padding_top', label: 'Padding Top', help: 'Top padding, in 10px increments', type: 'number' },
                { name: 'padding_bottom', label: 'Padding Bottom', help: 'Bottom padding, in 10px increments', type: 'number' },
                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
                { name: 'id', label: 'ID', help: 'The HTML id of the section (can be referenced by anchor links).', type: 'text' },
            ] },
    ],
};
// eslint-disable-next-line complexity
export function SectionBlock({ data }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const id = (_a = findByType(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
    const textAlign = (_b = findByType(data.value.config, 'text_alignment')) === null || _b === void 0 ? void 0 : _b.value;
    const flex = (_c = findByType(data.value.config, 'flex')) === null || _c === void 0 ? void 0 : _c.value;
    const backgroundColor = (_d = findByType(data.value.config, 'background_color')) === null || _d === void 0 ? void 0 : _d.value;
    const padding = (_f = (_e = findByType(data.value.config, 'padding')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : 0;
    const paddingTop = (_g = findByType(data.value.config, 'padding_top')) === null || _g === void 0 ? void 0 : _g.value;
    const paddingBottom = (_h = findByType(data.value.config, 'padding_bottom')) === null || _h === void 0 ? void 0 : _h.value;
    const analytics = (_j = findByType(data.value.config, 'analytics_label')) === null || _j === void 0 ? void 0 : _j.value;
    const isDark = backgroundColor && Color(backgroundColor).isDark(); // eslint-disable-line new-cap
    const display = data.value.content.some(d => findByType(d.value.config, 'flex'))
        ? 'flex' : 'block';
    return _jsx("section", { id: id, className: cn('content-block-section', { 'dark-background': isDark, [`content-block-${flex}`]: flex }), "data-analytics-nav": analytics, style: { backgroundColor,
            '--padding-multiplier': padding,
            '--padding-top-multiplier': paddingTop,
            '--padding-bottom-multiplier': paddingBottom
        }, children: _jsx("div", { className: "section-content", style: { textAlign, display, flexDirection: 'column' }, children: _jsx(ContentBlocks, { data: data.value.content }) }) });
}
