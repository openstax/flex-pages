"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.Component = void 0;
// OpenStax variant of the renderer's rich-text block: same content render, plus
// the openstax-cms editor stylesheet (eyebrow, brand text colors). The Component
// is a thin proxy that tags the output with an `os-rich-text` class so those
// styles scope to this block only; config passes through from the renderer so the
// rich-text field is processed identically.
//
// Exported here under the renderer's `text` key as a drop-in override, but a host
// may register it under a separate key to use both versions (see the example app's
// blocks merge, which exposes it as `os_text` alongside the plain `text` block).
var RichTextOverrideBlock_component_js_1 = require("./RichTextOverrideBlock.component.js");
Object.defineProperty(exports, "Component", { enumerable: true, get: function () { return RichTextOverrideBlock_component_js_1.Component; } });
var RichTextBlock_1 = require("@openstax/flex-page-renderer/blocks/RichTextBlock");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return RichTextBlock_1.config; } });
