"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksBlock = LinksBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const color_1 = __importDefault(require("color"));
const Link_1 = require("../components/Link");
const utils_1 = require("../utils");
require("./LinksBlock.css");
LinksBlock.blockConfig = {
    type: 'cta_block',
    categories: ['content'],
    label: 'Links',
    fields: [
        { name: 'links', label: 'Links', type: 'list', fields: Link_1.linkFieldConfig },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
                { name: 'color', label: 'Color', type: 'select', options: [
                        { value: 'white', label: 'White' },
                        { value: 'blue', label: 'Blue' },
                        { value: 'deep-green', label: 'Deep Green' },
                    ] },
                { name: 'custom_color', label: 'Custom Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex color override. Overrides Color preset.' },
                { name: 'size', label: 'Size', type: 'select', options: [
                        { value: 'small', label: 'Small' },
                        { value: 'large', label: 'Large' },
                    ] },
                { name: 'layout', label: 'Layout', type: 'select', options: [
                        { value: 'grid', label: 'Grid' },
                        { value: 'inline', label: 'Inline' },
                    ] },
            ] },
    ],
};
function LinksBlock({ data }) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const analytics = (_a = (0, utils_1.findByType)(data.value.config, 'analytics_label')) === null || _a === void 0 ? void 0 : _a.value;
    const color = (_c = (_b = (0, utils_1.findByType)(data.value.config, 'color')) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 'white';
    const customColor = (_d = (0, utils_1.findByType)(data.value.config, 'custom_color')) === null || _d === void 0 ? void 0 : _d.value;
    const size = (_f = (_e = (0, utils_1.findByType)(data.value.config, 'size')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : 'large';
    const layout = (_h = (_g = (0, utils_1.findByType)(data.value.config, 'layout')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : 'grid';
    const useCustom = Boolean(customColor);
    const customColorClass = useCustom
        ? (0, color_1.default)(customColor).isDark() ? 'custom-color-dark' : 'custom-color-light' // eslint-disable-line new-cap
        : undefined;
    const style = useCustom
        ? { '--link-bg-color': customColor }
        : undefined;
    return (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('content-block-links', !useCustom && `color-${color}`, customColorClass, `size-${size}`, `layout-${layout}`), style: style, "data-analytics-nav": analytics, children: data.value.links.map((action, i) => (0, jsx_runtime_1.jsx)(Link_1.Link, { link: action }, i)) });
}
