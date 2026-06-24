// Single block registry. Each renderer block is a { Component, fields }
// namespace and declares its own client/server boundary, so the app no longer
// curates a server/client split by hand.
export * from '@openstax/flex-page-renderer/blocks/index';
// OpenStax-specific blocks (coupled to book data); registered alongside the
// generic renderer blocks under their own block types.
export * from '@openstax/flex-page-os-blocks/blocks/index';
// Both barrels export `text`: the renderer's plain rich-text block and the
// os-blocks styled variant. Register them SEPARATELY so a page can use either —
// the renderer's as `text`, the styled variant as `os_text`. (The two `export *`
// above leave `text` ambiguous under ESM, so it's dropped; these explicit
// re-exports restore the renderer's under `text` and expose the variant as
// `os_text` — explicit named exports take precedence over star exports.)
export { text } from '@openstax/flex-page-renderer/blocks/index';
export { text as os_text } from '@openstax/flex-page-os-blocks/blocks/index';
