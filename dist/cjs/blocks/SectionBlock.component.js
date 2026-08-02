"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionBlock = SectionBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const utils_js_1 = require("../utils.js");
require("./SectionBlock.css");
function SectionBlock({ data, content, activeConditions }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const condition = (_a = (0, utils_js_1.findByType)(data.value.config, 'rendering_condition')) === null || _a === void 0 ? void 0 : _a.value;
    if (condition && !condition.split(',').some(c => activeConditions === null || activeConditions === void 0 ? void 0 : activeConditions.includes(c.trim())))
        return null;
    const id = (_b = (0, utils_js_1.findByType)(data.value.config, 'id')) === null || _b === void 0 ? void 0 : _b.value;
    const textAlign = (_c = (0, utils_js_1.findByType)(data.value.config, 'text_alignment')) === null || _c === void 0 ? void 0 : _c.value;
    const flex = (_d = (0, utils_js_1.findByType)(data.value.config, 'flex')) === null || _d === void 0 ? void 0 : _d.value;
    const backgroundColor = (_e = (0, utils_js_1.findByType)(data.value.config, 'background_color')) === null || _e === void 0 ? void 0 : _e.value;
    const gradientColor = (_f = (0, utils_js_1.findByType)(data.value.config, 'gradient_color')) === null || _f === void 0 ? void 0 : _f.value;
    const gradientDirection = (_g = (0, utils_js_1.findByType)(data.value.config, 'gradient_direction')) === null || _g === void 0 ? void 0 : _g.value;
    const padding = (_j = (_h = (0, utils_js_1.findByType)(data.value.config, 'padding')) === null || _h === void 0 ? void 0 : _h.value) !== null && _j !== void 0 ? _j : 0;
    const paddingTop = (_k = (0, utils_js_1.findByType)(data.value.config, 'padding_top')) === null || _k === void 0 ? void 0 : _k.value;
    const paddingBottom = (_l = (0, utils_js_1.findByType)(data.value.config, 'padding_bottom')) === null || _l === void 0 ? void 0 : _l.value;
    const topBorderSize = (_m = (0, utils_js_1.findByType)(data.value.config, 'top_border_size')) === null || _m === void 0 ? void 0 : _m.value;
    const topBorderColor = (_o = (0, utils_js_1.findByType)(data.value.config, 'top_border_color')) === null || _o === void 0 ? void 0 : _o.value;
    const bottomBorderSize = (_p = (0, utils_js_1.findByType)(data.value.config, 'bottom_border_size')) === null || _p === void 0 ? void 0 : _p.value;
    const bottomBorderColor = (_q = (0, utils_js_1.findByType)(data.value.config, 'bottom_border_color')) === null || _q === void 0 ? void 0 : _q.value;
    const analytics = (_r = (0, utils_js_1.findByType)(data.value.config, 'analytics_label')) === null || _r === void 0 ? void 0 : _r.value;
    const bg = (0, utils_js_1.resolveBackground)(backgroundColor, gradientColor, gradientDirection);
    const display = data.value.content.some(d => (0, utils_js_1.findByType)(d.value.config, 'flex'))
        ? 'flex' : 'block';
    return (0, jsx_runtime_1.jsx)("section", { id: id, className: (0, classnames_1.default)('content-block-section', { 'dark-background': bg.isDark, [`content-block-${flex}`]: flex }), "data-analytics-nav": analytics, style: { background: bg.background, backgroundColor: bg.backgroundColor,
            '--padding-multiplier': padding,
            '--padding-top-multiplier': paddingTop,
            '--padding-bottom-multiplier': paddingBottom,
            '--top-border-size': topBorderSize ? `${topBorderSize}px` : undefined,
            '--top-border-color': topBorderColor,
            '--bottom-border-size': bottomBorderSize ? `${bottomBorderSize}px` : undefined,
            '--bottom-border-color': bottomBorderColor
        }, children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('section-content', 'flex-content-container', (0, utils_js_1.flexAlignClass)(textAlign)), style: { textAlign, display, flexDirection: 'column' }, children: content }) });
}
