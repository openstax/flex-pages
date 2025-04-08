"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CTABlock = exports.CTALink = exports.ctaLinkFieldConfig = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const Link_1 = require("../components/Link");
const utils_1 = require("../utils");
require("./CTABlock.css");
exports.ctaLinkFieldConfig = [
    ...Link_1.linkFieldConfig,
    { name: 'config', label: 'Config', type: 'configs', configs: [
            { name: 'style', label: 'Style', type: 'select', options: [
                    { label: 'Orange', value: 'orange' },
                    { label: 'White', value: 'white' },
                    { label: 'Blue Outline', value: 'blue_outline' },
                    { label: 'Deep Green Outline', value: 'deep_green_outline' },
                ] },
        ] },
];
function CTALink({ link }) {
    var _a;
    const style = (_a = (0, utils_1.findByType)(link.config, 'style')) === null || _a === void 0 ? void 0 : _a.value;
    const styleClass = style ? `style-${style}` : style;
    return (0, jsx_runtime_1.jsx)(Link_1.Link, { link: link, className: (0, classnames_1.default)('cta-link', styleClass, styleClass ? 'styled-button' : undefined) });
}
exports.CTALink = CTALink;
CTABlock.blockConfig = {
    type: 'cta_block',
    categories: ['content'],
    label: 'Call to Action',
    fields: [
        { name: 'actions', label: 'Actions', type: 'list', fields: exports.ctaLinkFieldConfig },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
            ] },
    ],
};
function CTABlock({ data }) {
    var _a;
    const analytics = (_a = (0, utils_1.findByType)(data.value.config, 'analytics_label')) === null || _a === void 0 ? void 0 : _a.value;
    return (0, jsx_runtime_1.jsx)("div", { className: "content-block-cta-block", "data-analytics-nav": analytics, children: data.value.actions.map((action, i) => (0, jsx_runtime_1.jsx)(CTALink, { link: action }, i)) });
}
exports.CTABlock = CTABlock;
