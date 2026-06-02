"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CTALink = CTALink;
exports.CTABlock = CTABlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const color_1 = __importDefault(require("color"));
const Link_1 = require("../components/Link");
const utils_1 = require("../utils");
const RichTextBlock_component_1 = require("./RichTextBlock.component");
require("./CTABlock.css");
function CTALink({ link }) {
    var _a, _b;
    const stylePreset = (_a = (0, utils_1.findByType)(link.config, 'style')) === null || _a === void 0 ? void 0 : _a.value;
    const customColor = (_b = (0, utils_1.findByType)(link.config, 'custom_color')) === null || _b === void 0 ? void 0 : _b.value;
    const useCustom = Boolean(customColor);
    const customColorClass = useCustom
        ? (0, color_1.default)(customColor).isDark() ? 'style-custom-dark' : 'style-custom-light' // eslint-disable-line new-cap
        : undefined;
    const styleClass = !useCustom && stylePreset ? `style-${stylePreset}` : undefined;
    const style = useCustom
        ? { '--cta-custom-color': customColor }
        : undefined;
    return (0, jsx_runtime_1.jsx)(Link_1.Link, { link: link, className: (0, classnames_1.default)('cta-link', styleClass, customColorClass, (styleClass || customColorClass) ? 'styled-button' : undefined), style: style });
}
function CTABlock({ data, activeConditions }) {
    var _a, _b, _c;
    const condition = (_a = (0, utils_1.findByType)(data.value.config, 'rendering_condition')) === null || _a === void 0 ? void 0 : _a.value;
    if (condition && !condition.split(',').some(c => activeConditions === null || activeConditions === void 0 ? void 0 : activeConditions.includes(c.trim())))
        return null;
    const analytics = (_b = (0, utils_1.findByType)(data.value.config, 'analytics_label')) === null || _b === void 0 ? void 0 : _b.value;
    const layout = (_c = (0, utils_1.findByType)(data.value.config, 'layout')) === null || _c === void 0 ? void 0 : _c.value;
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('content-block-cta-block', layout === 'inline' ? 'layout-inline' : undefined), "data-analytics-nav": analytics, children: [data.value.description ? (0, jsx_runtime_1.jsx)("div", { className: "cta-description", children: (0, jsx_runtime_1.jsx)(RichTextBlock_component_1.RichTextContent, { html: data.value.description }) }) : null, (0, jsx_runtime_1.jsx)("div", { className: "cta-actions", children: data.value.actions.map((action, i) => (0, jsx_runtime_1.jsx)(CTALink, { link: action }, i)) })] });
}
