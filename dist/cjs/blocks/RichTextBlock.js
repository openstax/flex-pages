"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichTextContent = RichTextContent;
exports.RichTextBlock = RichTextBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const Html_1 = require("../components/Html");
require("./RichTextBlock.css");
RichTextBlock.blockConfig = {
    type: 'text',
    categories: ['content'],
    label: 'Text',
    field: { name: 'text', label: 'Text', type: 'rich-text' },
};
function RichTextContent({ html }) {
    return (0, jsx_runtime_1.jsx)(Html_1.Html, { block: true, className: 'content-block-rich-text', html: html });
}
function RichTextBlock({ data }) {
    return (0, jsx_runtime_1.jsx)(RichTextContent, { html: data.value });
}
