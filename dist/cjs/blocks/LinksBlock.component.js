"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksBlock = LinksBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const color_1 = __importDefault(require("color"));
const Link_js_1 = require("../components/Link.js");
const utils_js_1 = require("../utils.js");
require("./LinksBlock.css");
function LinksBlock({ data }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const analytics = (_a = (0, utils_js_1.findByType)(data.value.config, 'analytics_label')) === null || _a === void 0 ? void 0 : _a.value;
    const linkStyle = (_c = (_b = (0, utils_js_1.findByType)(data.value.config, 'style')) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 'button';
    const color = (_e = (_d = (0, utils_js_1.findByType)(data.value.config, 'color')) === null || _d === void 0 ? void 0 : _d.value) !== null && _e !== void 0 ? _e : 'white';
    const customColor = (_f = (0, utils_js_1.findByType)(data.value.config, 'custom_color')) === null || _f === void 0 ? void 0 : _f.value;
    const size = (_h = (_g = (0, utils_js_1.findByType)(data.value.config, 'size')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : 'large';
    const layout = (_k = (_j = (0, utils_js_1.findByType)(data.value.config, 'layout')) === null || _j === void 0 ? void 0 : _j.value) !== null && _k !== void 0 ? _k : 'grid';
    const useCustom = Boolean(customColor);
    const customColorClass = useCustom
        ? (0, color_1.default)(customColor).isDark() ? 'custom-color-dark' : 'custom-color-light'
        : undefined;
    const style = useCustom
        ? { '--link-bg-color': customColor }
        : undefined;
    return (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('content-block-links', `links-style-${linkStyle}`, !useCustom && `color-${color}`, customColorClass, `size-${size}`, `layout-${layout}`), style: style, "data-analytics-nav": analytics, children: data.value.links.map((action, i) => (0, jsx_runtime_1.jsx)(Link_js_1.Link, { link: action }, i)) });
}
