"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = Component;
const jsx_runtime_1 = require("react/jsx-runtime");
const RichTextBlock_component_1 = require("@openstax/flex-page-renderer/blocks/RichTextBlock.component");
require("./RichTextOverrideBlock.css");
// Proxy over the renderer's rich-text render: identical content output, plus an
// `os-rich-text` marker class. The extra stylesheet (RichTextOverrideBlock.scss)
// scopes the openstax-cms editor styles (eyebrow, brand text colors) to that
// class, so they apply only to this block — a plain `text` block renders the same
// markup unstyled. Registered under its own key, so both are usable side by side.
function Component({ data }) {
    return (0, jsx_runtime_1.jsx)(RichTextBlock_component_1.RichTextContent, { html: data.value, className: 'os-rich-text' });
}
