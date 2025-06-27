"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroBlock = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const color_1 = __importDefault(require("color"));
const ContentBlocks_1 = require("../ContentBlocks");
const Image_1 = require("../components/Image");
const utils_1 = require("../utils");
require("./HeroBlock.css");
HeroBlock.blockConfig = {
    type: 'hero',
    categories: ['structure'],
    label: 'Hero',
    fields: [
        { name: 'content', label: 'Content', type: 'blocks', categories: ['content'] },
        { name: 'imageAlt', label: 'Image Alt', type: 'text' },
        { name: 'image', label: 'Hero Image', type: 'namespace', fields: Image_1.imageFieldsConfig },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'image_alignment', label: 'Image Alignment', type: 'select', options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Top Left', value: 'top_left' },
                        { label: 'Bottom Left', value: 'bottom_left' },
                        { label: 'Right', value: 'right' },
                        { label: 'Top Right', value: 'top_right' },
                        { label: 'Bottom Right', value: 'bottom_right' },
                    ] },
                { name: 'text_alignment', label: 'Text Alignment', type: 'select', options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Right', value: 'right' },
                        { label: 'Center', value: 'center' },
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
const parseAlignment = (alignment) => {
    if (alignment.includes('top')) {
        return 'flex-start';
    }
    if (alignment.includes('bottom')) {
        return 'flex-end';
    }
    return 'center';
};
// eslint-disable-next-line complexity
function HeroBlock({ data }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const id = (_a = (0, utils_1.findByType)(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
    const textAlign = (_b = (0, utils_1.findByType)(data.value.config, 'text_alignment')) === null || _b === void 0 ? void 0 : _b.value;
    const backgroundColor = (_c = (0, utils_1.findByType)(data.value.config, 'background_color')) === null || _c === void 0 ? void 0 : _c.value;
    const padding = (_e = (_d = (0, utils_1.findByType)(data.value.config, 'padding')) === null || _d === void 0 ? void 0 : _d.value) !== null && _e !== void 0 ? _e : 0;
    const paddingTop = (_f = (0, utils_1.findByType)(data.value.config, 'padding_top')) === null || _f === void 0 ? void 0 : _f.value;
    const paddingBottom = (_g = (0, utils_1.findByType)(data.value.config, 'padding_bottom')) === null || _g === void 0 ? void 0 : _g.value;
    const analytics = (_h = (0, utils_1.findByType)(data.value.config, 'analytics_label')) === null || _h === void 0 ? void 0 : _h.value;
    const isDark = backgroundColor && (0, color_1.default)(backgroundColor).isDark(); // eslint-disable-line new-cap
    const alignment = (_k = (_j = (0, utils_1.findByType)(data.value.config, 'image_alignment')) === null || _j === void 0 ? void 0 : _j.value.toLowerCase()) !== null && _k !== void 0 ? _k : 'right';
    const imageRight = alignment.includes('right');
    const imageVerticalAlign = parseAlignment(alignment);
    return (0, jsx_runtime_1.jsx)("section", { id: id, className: (0, classnames_1.default)('content-block-hero', { 'dark-background': isDark }), "data-analytics-nav": analytics, style: { backgroundColor,
            '--padding-multiplier': padding,
            '--padding-top-multiplier': paddingTop,
            '--padding-bottom-multiplier': paddingBottom,
            '--image-vertical-align': imageVerticalAlign
        }, children: (0, jsx_runtime_1.jsx)("div", { className: "hero-inner-wrapper", children: imageRight ? (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "hero-content", style: { textAlign }, children: (0, jsx_runtime_1.jsx)(ContentBlocks_1.ContentBlocks, { data: data.value.content }) }), (0, jsx_runtime_1.jsx)("div", { className: "hero-image-container", children: (0, jsx_runtime_1.jsx)(Image_1.Image, { className: "hero-image", image: data.value.image, alt: data.value.imageAlt }) })] }) : (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "hero-image-container", children: (0, jsx_runtime_1.jsx)(Image_1.Image, { className: "hero-image", image: data.value.image, alt: data.value.imageAlt }) }), (0, jsx_runtime_1.jsx)("div", { className: "hero-content", style: { textAlign }, children: (0, jsx_runtime_1.jsx)(ContentBlocks_1.ContentBlocks, { data: data.value.content }) })] }) }) });
}
exports.HeroBlock = HeroBlock;
