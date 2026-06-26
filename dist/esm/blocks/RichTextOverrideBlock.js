// OpenStax variant of the renderer's rich-text block: same content render, plus
// the openstax-cms editor stylesheet (eyebrow, brand text colors). The Component
// is a thin proxy that tags the output with an `os-rich-text` class so those
// styles scope to this block only; config passes through from the renderer so the
// rich-text field is processed identically.
//
// Exported here under the renderer's `text` key as a drop-in override, but a host
// may register it under a separate key to use both versions (see the example app's
// blocks merge, which exposes it as `os_text` alongside the plain `text` block).
export { Component } from './RichTextOverrideBlock.component.js';
export { config } from '@openstax/flex-page-renderer/blocks/RichTextBlock';
