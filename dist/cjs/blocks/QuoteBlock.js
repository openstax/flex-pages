"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteBlock = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Image_1 = require("../components/Image");
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
    ],
};
function QuoteBlock({ data }) {
    return (0, jsx_runtime_1.jsxs)("div", { className: "content-block-quote", children: [(0, jsx_runtime_1.jsx)(Image_1.Image, { alt: "", image: data.value.image }), (0, jsx_runtime_1.jsx)(RichTextBlock_1.RichTextContent, { html: data.value.content }), (0, jsx_runtime_1.jsxs)("div", { className: "quotee", children: [(0, jsx_runtime_1.jsx)("span", { className: "name", children: data.value.name }), data.value.title ? (0, jsx_runtime_1.jsx)("span", { className: "title", children: data.value.title }) : null] })] });
}
exports.QuoteBlock = QuoteBlock;
