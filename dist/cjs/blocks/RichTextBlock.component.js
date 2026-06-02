"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichTextContent = RichTextContent;
exports.RichTextBlock = RichTextBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const Html_1 = require("../components/Html");
const RawHtmlWithLinks_1 = require("../components/RawHtmlWithLinks");
require("./RichTextBlock.css");
function RichTextContent({ html }) {
    // Cheap server-side discriminator: only escalate to the client renderer when
    // the markup actually contains a dynamic link. Link-free prose stays a
    // zero-JS server render. (No false negatives — the editor always writes the
    // literal `data-flex-link` attribute; a false positive merely ships unused JS.)
    if (html.includes('data-flex-link')) {
        return (0, jsx_runtime_1.jsx)(RawHtmlWithLinks_1.RawHtmlWithLinks, { block: true, className: 'content-block-rich-text', html: html });
    }
    return (0, jsx_runtime_1.jsx)(Html_1.Html, { block: true, className: 'content-block-rich-text', html: html });
}
function RichTextBlock({ data }) {
    return (0, jsx_runtime_1.jsx)(RichTextContent, { html: data.value });
}
