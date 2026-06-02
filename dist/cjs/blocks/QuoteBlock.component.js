"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteBlock = QuoteBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const Image_1 = require("../components/Image");
const utils_1 = require("../utils");
const RichTextBlock_component_1 = require("./RichTextBlock.component");
require("./QuoteBlock.css");
function QuoteBlock({ data }) {
    var _a;
    const accentColor = (_a = (0, utils_1.findByType)(data.value.config, 'accent_color')) === null || _a === void 0 ? void 0 : _a.value;
    const style = accentColor
        ? { '--quote-accent-color': accentColor }
        : undefined;
    return (0, jsx_runtime_1.jsxs)("div", { className: "content-block-quote", style: style, children: [(0, jsx_runtime_1.jsx)(Image_1.Image, { alt: "", image: data.value.image }), (0, jsx_runtime_1.jsx)(RichTextBlock_component_1.RichTextContent, { html: data.value.content }), (0, jsx_runtime_1.jsxs)("div", { className: "quotee", children: [(0, jsx_runtime_1.jsx)("span", { className: "name", children: data.value.name }), data.value.title ? (0, jsx_runtime_1.jsx)("span", { className: "title", children: data.value.title }) : null] })] });
}
