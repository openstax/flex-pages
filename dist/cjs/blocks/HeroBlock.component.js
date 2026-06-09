"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroBlock = HeroBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const Image_js_1 = require("../components/Image.js");
const utils_js_1 = require("../utils.js");
require("./HeroBlock.css");
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
function HeroBlock({ data, content, activeConditions }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    const condition = (_a = (0, utils_js_1.findByType)(data.value.config, 'rendering_condition')) === null || _a === void 0 ? void 0 : _a.value;
    if (condition && !condition.split(',').some(c => activeConditions === null || activeConditions === void 0 ? void 0 : activeConditions.includes(c.trim())))
        return null;
    const id = (_b = (0, utils_js_1.findByType)(data.value.config, 'id')) === null || _b === void 0 ? void 0 : _b.value;
    const textAlign = (_c = (0, utils_js_1.findByType)(data.value.config, 'text_alignment')) === null || _c === void 0 ? void 0 : _c.value;
    const backgroundColor = (_d = (0, utils_js_1.findByType)(data.value.config, 'background_color')) === null || _d === void 0 ? void 0 : _d.value;
    const gradientColor = (_e = (0, utils_js_1.findByType)(data.value.config, 'gradient_color')) === null || _e === void 0 ? void 0 : _e.value;
    const gradientDirection = (_f = (0, utils_js_1.findByType)(data.value.config, 'gradient_direction')) === null || _f === void 0 ? void 0 : _f.value;
    const padding = (_h = (_g = (0, utils_js_1.findByType)(data.value.config, 'padding')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : 0;
    const paddingTop = (_j = (0, utils_js_1.findByType)(data.value.config, 'padding_top')) === null || _j === void 0 ? void 0 : _j.value;
    const paddingBottom = (_k = (0, utils_js_1.findByType)(data.value.config, 'padding_bottom')) === null || _k === void 0 ? void 0 : _k.value;
    const imageBorderRadius = (_l = (0, utils_js_1.findByType)(data.value.config, 'image_border_radius')) === null || _l === void 0 ? void 0 : _l.value;
    const imageBorderColor = (_m = (0, utils_js_1.findByType)(data.value.config, 'image_border_color')) === null || _m === void 0 ? void 0 : _m.value;
    const imageBorderSize = (_o = (0, utils_js_1.findByType)(data.value.config, 'image_border_size')) === null || _o === void 0 ? void 0 : _o.value;
    const imageOverhang = (_p = (0, utils_js_1.findByType)(data.value.config, 'image_overhang')) === null || _p === void 0 ? void 0 : _p.value;
    const analytics = (_q = (0, utils_js_1.findByType)(data.value.config, 'analytics_label')) === null || _q === void 0 ? void 0 : _q.value;
    const bg = (0, utils_js_1.resolveBackground)(backgroundColor, gradientColor, gradientDirection);
    const alignment = (_s = (_r = (0, utils_js_1.findByType)(data.value.config, 'image_alignment')) === null || _r === void 0 ? void 0 : _r.value.toLowerCase()) !== null && _s !== void 0 ? _s : 'right';
    const imageRight = alignment.includes('right');
    const imageVerticalAlign = parseAlignment(alignment);
    return (0, jsx_runtime_1.jsx)("section", { id: id, className: (0, classnames_1.default)('content-block-hero', { 'dark-background': bg.isDark }), "data-analytics-nav": analytics, style: { background: bg.background, backgroundColor: bg.backgroundColor,
            '--padding-multiplier': padding,
            '--padding-top-multiplier': paddingTop,
            '--padding-bottom-multiplier': paddingBottom,
            '--image-vertical-align': imageVerticalAlign,
            '--image-border-radius': imageBorderRadius ? `${imageBorderRadius}px` : undefined,
            '--image-border-color': imageBorderColor,
            '--image-border-size': imageBorderSize ? `${imageBorderSize}px` : undefined,
            '--image-overhang': imageOverhang || undefined
        }, children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('hero-inner-wrapper', { 'image-left': !imageRight }), children: imageRight ? (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('hero-content', 'flex-content-container', (0, utils_js_1.flexAlignClass)(textAlign)), style: { textAlign }, children: content }), (0, jsx_runtime_1.jsx)("div", { className: "hero-image-container", children: (0, jsx_runtime_1.jsx)(Image_js_1.Image, { className: "hero-image", image: data.value.image, alt: data.value.imageAlt }) })] }) : (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "hero-image-container", children: (0, jsx_runtime_1.jsx)(Image_js_1.Image, { className: "hero-image", image: data.value.image, alt: data.value.imageAlt }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('hero-content', 'flex-content-container', (0, utils_js_1.flexAlignClass)(textAlign)), style: { textAlign }, children: content })] }) }) });
}
