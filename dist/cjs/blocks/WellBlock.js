"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WellBlock = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const color_1 = __importDefault(require("color"));
const ContentBlocks_1 = require("../ContentBlocks");
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
                { name: 'border_radius', label: 'Border Radius', help: 'Border radius in pixels', type: 'number' },
                { name: 'padding', label: 'Padding', help: 'Inner padding, in 10px increments', type: 'number' },
                { name: 'margin', label: 'Margin', help: 'Outer margin, in 10px increments', type: 'number' },
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
function WellBlock({ data }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const id = (_a = (0, utils_1.findByType)(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
    const backgroundColor = (_b = (0, utils_1.findByType)(data.value.config, 'background_color')) === null || _b === void 0 ? void 0 : _b.value;
    const borderRadius = (_d = (_c = (0, utils_1.findByType)(data.value.config, 'border_radius')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : 8;
    const padding = (_f = (_e = (0, utils_1.findByType)(data.value.config, 'padding')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : 2;
    const margin = (_h = (_g = (0, utils_1.findByType)(data.value.config, 'margin')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : 0;
    const textAlign = (_j = (0, utils_1.findByType)(data.value.config, 'text_alignment')) === null || _j === void 0 ? void 0 : _j.value;
    const analytics = (_k = (0, utils_1.findByType)(data.value.config, 'analytics_label')) === null || _k === void 0 ? void 0 : _k.value;
    const isDark = backgroundColor && (0, color_1.default)(backgroundColor).isDark(); // eslint-disable-line new-cap
    const isLight = backgroundColor && !isDark;
    return (0, jsx_runtime_1.jsx)("div", { id: id, className: (0, classnames_1.default)('content-block-well', { 'dark-background': isDark, 'light-background': isLight }), "data-analytics-nav": analytics, style: {
            '--padding-multiplier': padding,
            '--margin-multiplier': margin
        }, children: (0, jsx_runtime_1.jsx)("div", { className: "well-content", style: {
                backgroundColor,
                borderRadius: `${borderRadius}px`,
                textAlign
            }, children: (0, jsx_runtime_1.jsx)(ContentBlocks_1.ContentBlocks, { data: data.value.content }) }) });
}
exports.WellBlock = WellBlock;
