"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichTextContent = RichTextContent;
exports.RichTextBlock = RichTextBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const Html_js_1 = require("../components/Html.js");
const RawHtmlWithLinks_js_1 = require("../components/RawHtmlWithLinks.js");
require("./RichTextBlock.css");
// Renders rich-text HTML inside a single block element. Callers may forward
// `id`/`className`/`hidden` so the rendered element can stand in for a wrapper
// they would otherwise add around it; `className` is merged with the block's
// own `content-block-rich-text` class.
function RichTextContent({ html, id, className, hidden }) {
    const props = { block: true, id, hidden, className: (0, classnames_1.default)('content-block-rich-text', className) };
    // Cheap server-side discriminator: only escalate to the client renderer when
    // the markup actually contains a dynamic link. Link-free prose stays a
    // zero-JS server render. (No false negatives — the editor always writes the
    // literal `data-flex-link` attribute; a false positive merely ships unused JS.)
    if (html.includes('data-flex-link')) {
        return (0, jsx_runtime_1.jsx)(RawHtmlWithLinks_js_1.RawHtmlWithLinks, { ...props, html: html });
    }
    return (0, jsx_runtime_1.jsx)(Html_js_1.Html, { ...props, html: html });
}
function RichTextBlock({ data }) {
    return (0, jsx_runtime_1.jsx)(RichTextContent, { html: data.value });
}
