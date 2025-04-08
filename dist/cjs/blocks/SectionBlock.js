"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionBlock = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const color_1 = __importDefault(require("color"));
const utils_1 = require("../utils");
const ContentBlocks_1 = require("../ContentBlocks");
require("./SectionBlock.css");
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
function SectionBlock({ data }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const id = (_a = (0, utils_1.findByType)(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
    const textAlign = (_b = (0, utils_1.findByType)(data.value.config, 'text_alignment')) === null || _b === void 0 ? void 0 : _b.value;
    const flex = (_c = (0, utils_1.findByType)(data.value.config, 'flex')) === null || _c === void 0 ? void 0 : _c.value;
    const backgroundColor = (_d = (0, utils_1.findByType)(data.value.config, 'background_color')) === null || _d === void 0 ? void 0 : _d.value;
    const padding = (_f = (_e = (0, utils_1.findByType)(data.value.config, 'padding')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : 0;
    const paddingTop = (_g = (0, utils_1.findByType)(data.value.config, 'padding_top')) === null || _g === void 0 ? void 0 : _g.value;
    const paddingBottom = (_h = (0, utils_1.findByType)(data.value.config, 'padding_bottom')) === null || _h === void 0 ? void 0 : _h.value;
    const analytics = (_j = (0, utils_1.findByType)(data.value.config, 'analytics_label')) === null || _j === void 0 ? void 0 : _j.value;
    const isDark = backgroundColor && (0, color_1.default)(backgroundColor).isDark(); // eslint-disable-line new-cap
    return (0, jsx_runtime_1.jsx)("section", { id: id, className: (0, classnames_1.default)('content-block-section', { 'dark-background': isDark, [`content-block-${flex}`]: flex }), "data-analytics-nav": analytics, style: { backgroundColor,
            '--padding-multiplier': padding,
            '--padding-top-multiplier': paddingTop,
            '--padding-bottom-multiplier': paddingBottom
        }, children: (0, jsx_runtime_1.jsx)("div", { className: "section-content", style: { textAlign }, children: (0, jsx_runtime_1.jsx)(ContentBlocks_1.ContentBlocks, { data: data.value.content }) }) });
}
exports.SectionBlock = SectionBlock;
