import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import Color from 'color';
import { findByType } from '../utils';
import { ContentBlocks } from '../ContentBlocks';
import './ColumnsBlock.css';
ColumnsBlock.blockConfig = {
    type: 'columns',
    label: 'Columns',
    categories: ['structure'],
    fields: [
        { name: 'leftContent', label: 'Left Column Content', type: 'blocks', categories: ['content'] },
        { name: 'rightContent', label: 'Right Column Content', type: 'blocks', categories: ['content'] },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}' },
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
                { name: 'right_size', label: 'Right Column Size', help: 'CSS text for the right column eg (20rem, 30%)', type: 'text',
                    disabledWhen: (data) => { var _a; return !!((_a = data === null || data === void 0 ? void 0 : data.config) === null || _a === void 0 ? void 0 : _a.find((c) => c.name === 'left_size')); }
                },
                { name: 'left_size', label: 'Left Column Size', help: 'CSS text for the left column eg (20rem, 30%)', type: 'text',
                    disabledWhen: (data) => { var _a; return !!((_a = data === null || data === void 0 ? void 0 : data.config) === null || _a === void 0 ? void 0 : _a.find((c) => c.name === 'right_size')); }
                },
            ] },
    ],
};
// eslint-disable-next-line complexity
export function ColumnsBlock({ data }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const id = (_a = findByType(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
    const gap = (_c = (_b = findByType(data.value.config, 'gap')) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 0;
    const flex = (_d = findByType(data.value.config, 'flex')) === null || _d === void 0 ? void 0 : _d.value;
    const leftSize = (_e = findByType(data.value.config, 'left_size')) === null || _e === void 0 ? void 0 : _e.value;
    const rightSize = leftSize ? undefined : (_f = findByType(data.value.config, 'left_size')) === null || _f === void 0 ? void 0 : _f.value;
    const backgroundColor = (_g = findByType(data.value.config, 'background_color')) === null || _g === void 0 ? void 0 : _g.value;
    const padding = (_j = (_h = findByType(data.value.config, 'padding')) === null || _h === void 0 ? void 0 : _h.value) !== null && _j !== void 0 ? _j : 0;
    const paddingTop = (_k = findByType(data.value.config, 'padding_top')) === null || _k === void 0 ? void 0 : _k.value;
    const paddingBottom = (_l = findByType(data.value.config, 'padding_bottom')) === null || _l === void 0 ? void 0 : _l.value;
    const analytics = (_m = findByType(data.value.config, 'analytics_label')) === null || _m === void 0 ? void 0 : _m.value;
    const isDark = backgroundColor && Color(backgroundColor).isDark(); // eslint-disable-line new-cap
    const marginRight = `calc(${gap} * 1rem)`;
    const leftStyle = leftSize ? { '--col-width': leftSize, marginRight } : { flex: 1, marginRight };
    const rightStyle = rightSize ? { '--col-width': rightSize } : { flex: 1 };
    return _jsx("section", { id: id, className: cn('content-block-columns', { 'dark-background': isDark, [`content-block-${flex}`]: flex }), "data-analytics-nav": analytics, style: { backgroundColor,
            '--padding-multiplier': padding,
            '--padding-top-multiplier': paddingTop,
            '--padding-bottom-multiplier': paddingBottom
        }, children: _jsxs("div", { className: "columns-content", children: [_jsx("div", { className: "content-block-columns-left", style: leftStyle, children: _jsx(ContentBlocks, { data: data.value.leftContent }) }), _jsx("div", { className: "content-block-columns-right", style: rightStyle, children: _jsx(ContentBlocks, { data: data.value.rightContent }) })] }) });
}
