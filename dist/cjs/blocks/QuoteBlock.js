"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteBlock = QuoteBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const Image_1 = require("../components/Image");
const utils_1 = require("../utils");
const RichTextBlock_1 = require("./RichTextBlock");
require("./QuoteBlock.css");
QuoteBlock.blockConfig = {
    type: 'quote',
    categories: ['content'],
    label: 'Quote',
    fields: [
        { name: 'content', label: 'Quote Text', type: 'long-text', required: true },
        { name: 'title', label: 'Quotee\'s title', type: 'text' },
        { name: 'name', label: 'Quotee\'s name', type: 'text', required: true },
        { name: 'image', label: 'Image', type: 'namespace', fields: Image_1.imageFieldsConfig },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'accent_color', label: 'Accent Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex color for the quote mark' },
            ] },
    ],
};
function QuoteBlock({ data }) {
    var _a;
    const accentColor = (_a = (0, utils_1.findByType)(data.value.config, 'accent_color')) === null || _a === void 0 ? void 0 : _a.value;
    const style = accentColor
        ? { '--quote-accent-color': accentColor }
        : undefined;
    return (0, jsx_runtime_1.jsxs)("div", { className: "content-block-quote", style: style, children: [(0, jsx_runtime_1.jsx)(Image_1.Image, { alt: "", image: data.value.image }), (0, jsx_runtime_1.jsx)(RichTextBlock_1.RichTextContent, { html: data.value.content }), (0, jsx_runtime_1.jsxs)("div", { className: "quotee", children: [(0, jsx_runtime_1.jsx)("span", { className: "name", children: data.value.name }), data.value.title ? (0, jsx_runtime_1.jsx)("span", { className: "title", children: data.value.title }) : null] })] });
}
