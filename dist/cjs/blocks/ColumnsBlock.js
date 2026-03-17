"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsBlock = ColumnsBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../utils");
require("./ColumnsBlock.css");
ColumnsBlock.blockConfig = {
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
function ColumnsBlock({ data, leftContent, rightContent }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    const id = (_a = (0, utils_1.findByType)(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
    const gap = (_c = (_b = (0, utils_1.findByType)(data.value.config, 'gap')) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 0;
    const flex = (_d = (0, utils_1.findByType)(data.value.config, 'flex')) === null || _d === void 0 ? void 0 : _d.value;
    const leftSize = (_e = (0, utils_1.findByType)(data.value.config, 'left_size')) === null || _e === void 0 ? void 0 : _e.value;
    const rightSize = leftSize ? undefined : (_f = (0, utils_1.findByType)(data.value.config, 'right_size')) === null || _f === void 0 ? void 0 : _f.value;
    const backgroundColor = (_g = (0, utils_1.findByType)(data.value.config, 'background_color')) === null || _g === void 0 ? void 0 : _g.value;
    const gradientColor = (_h = (0, utils_1.findByType)(data.value.config, 'gradient_color')) === null || _h === void 0 ? void 0 : _h.value;
    const gradientDirection = (_j = (0, utils_1.findByType)(data.value.config, 'gradient_direction')) === null || _j === void 0 ? void 0 : _j.value;
    const padding = (_l = (_k = (0, utils_1.findByType)(data.value.config, 'padding')) === null || _k === void 0 ? void 0 : _k.value) !== null && _l !== void 0 ? _l : 0;
    const paddingTop = (_m = (0, utils_1.findByType)(data.value.config, 'padding_top')) === null || _m === void 0 ? void 0 : _m.value;
    const paddingBottom = (_o = (0, utils_1.findByType)(data.value.config, 'padding_bottom')) === null || _o === void 0 ? void 0 : _o.value;
    const analytics = (_p = (0, utils_1.findByType)(data.value.config, 'analytics_label')) === null || _p === void 0 ? void 0 : _p.value;
    const bg = (0, utils_1.resolveBackground)(backgroundColor, gradientColor, gradientDirection);
    const leftDisplay = data.value.leftContent.some(d => (0, utils_1.findByType)(d.value.config, 'flex'))
        ? 'flex' : 'block';
    const rightDisplay = data.value.rightContent.some(d => (0, utils_1.findByType)(d.value.config, 'flex'))
        ? 'flex' : 'block';
    const leftStyle = {
        display: leftDisplay,
        flexDirection: 'column',
        ...(leftSize ? { '--col-width': leftSize } : { '--col-flex': 1 }),
    };
    const rightStyle = {
        display: rightDisplay,
        flexDirection: 'column',
        ...(rightSize ? { '--col-width': rightSize } : { '--col-flex': 1 }),
    };
    return (0, jsx_runtime_1.jsx)("section", { id: id, className: (0, classnames_1.default)('content-block-columns', { 'dark-background': bg.isDark, [`content-block-${flex}`]: flex }), "data-analytics-nav": analytics, style: { background: bg.background, backgroundColor: bg.backgroundColor,
            '--col-gap': gap,
            '--padding-multiplier': padding,
            '--padding-top-multiplier': paddingTop,
            '--padding-bottom-multiplier': paddingBottom
        }, children: (0, jsx_runtime_1.jsxs)("div", { className: "columns-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "content-block-columns-left", style: leftStyle, children: leftContent }), (0, jsx_runtime_1.jsx)("div", { className: "content-block-columns-right", style: rightStyle, children: rightContent })] }) });
}
