"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WellBlock = WellBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../utils");
require("./WellBlock.css");
WellBlock.blockConfig = {
    type: 'well',
    categories: ['content'],
    label: 'Well',
    fields: [
        { name: 'content', label: 'Well Content', type: 'blocks', categories: ['content'] },
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
                { name: 'border_radius', label: 'Border Radius', help: 'Border radius in pixels', type: 'number' },
                { name: 'border_color', label: 'Border Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex border color' },
                { name: 'border_size', label: 'Border Size', type: 'number', help: 'Border width in pixels. Only applies when border color is set.' },
                { name: 'padding', label: 'Padding', help: 'Inner padding, in 10px increments', type: 'number' },
                { name: 'margin', label: 'Margin', help: 'Outer margin, in 10px increments', type: 'number' },
                { name: 'pull_up', label: 'Pull Up', type: 'number', help: 'Pulls the well upward by this amount in rem units. Use with extra padding on the section above to create an overlap effect.' },
                { name: 'width', label: 'Width', help: 'Maximum width of the well content (e.g., 600px, 50%, auto)', type: 'text' },
                { name: 'text_alignment', label: 'Text Alignment', type: 'select', options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Right', value: 'right' },
                        { label: 'Center', value: 'center' },
                    ] },
                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this well will include this label', type: 'text' },
                { name: 'id', label: 'ID', help: 'The HTML id of the well (can be referenced by anchor links).', type: 'text' },
            ] },
    ],
};
function WellBlock({ data, content }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const id = (_a = (0, utils_1.findByType)(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
    const backgroundColor = (_b = (0, utils_1.findByType)(data.value.config, 'background_color')) === null || _b === void 0 ? void 0 : _b.value;
    const gradientColor = (_c = (0, utils_1.findByType)(data.value.config, 'gradient_color')) === null || _c === void 0 ? void 0 : _c.value;
    const gradientDirection = (_d = (0, utils_1.findByType)(data.value.config, 'gradient_direction')) === null || _d === void 0 ? void 0 : _d.value;
    const borderRadius = (_f = (_e = (0, utils_1.findByType)(data.value.config, 'border_radius')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : 8;
    const padding = (_h = (_g = (0, utils_1.findByType)(data.value.config, 'padding')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : 2;
    const margin = (_k = (_j = (0, utils_1.findByType)(data.value.config, 'margin')) === null || _j === void 0 ? void 0 : _j.value) !== null && _k !== void 0 ? _k : 0;
    const width = (_l = (0, utils_1.findByType)(data.value.config, 'width')) === null || _l === void 0 ? void 0 : _l.value;
    const textAlign = (_m = (0, utils_1.findByType)(data.value.config, 'text_alignment')) === null || _m === void 0 ? void 0 : _m.value;
    const pullUp = (_o = (0, utils_1.findByType)(data.value.config, 'pull_up')) === null || _o === void 0 ? void 0 : _o.value;
    const borderColor = (_p = (0, utils_1.findByType)(data.value.config, 'border_color')) === null || _p === void 0 ? void 0 : _p.value;
    const borderSize = (_q = (0, utils_1.findByType)(data.value.config, 'border_size')) === null || _q === void 0 ? void 0 : _q.value;
    const analytics = (_r = (0, utils_1.findByType)(data.value.config, 'analytics_label')) === null || _r === void 0 ? void 0 : _r.value;
    const bg = (0, utils_1.resolveBackground)(backgroundColor, gradientColor, gradientDirection);
    const isLight = (backgroundColor || gradientColor) && !bg.isDark;
    return (0, jsx_runtime_1.jsx)("div", { id: id, className: (0, classnames_1.default)('content-block-well', { 'dark-background': bg.isDark, 'light-background': isLight }), "data-analytics-nav": analytics, style: {
            '--padding-multiplier': padding,
            '--margin-multiplier': margin,
            ...(pullUp ? { marginTop: `-${pullUp}rem` } : {})
        }, children: (0, jsx_runtime_1.jsx)("div", { className: "well-content", style: {
                background: bg.background,
                backgroundColor: bg.backgroundColor,
                borderRadius: `${borderRadius}px`,
                textAlign,
                maxWidth: width,
                ...(borderColor ? { border: `${borderSize !== null && borderSize !== void 0 ? borderSize : 1}px solid ${borderColor}` } : {})
            }, children: content }) });
}
