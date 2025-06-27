"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichTextBlock = exports.RichTextContent = void 0;
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
exports.RichTextContent = RichTextContent;
function RichTextBlock({ data }) {
    return (0, jsx_runtime_1.jsx)(RichTextContent, { html: data.value });
}
exports.RichTextBlock = RichTextBlock;
