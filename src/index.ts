
export type ConfigField = {
  name: string;
  label: string;
  help?: string;
  type: string;
  [key: string]: unknown;
};

export { resolveContentBlocks } from './resolveContentBlocks';
export { validateBlock } from './validateBlock';
export type { ValidationCode, ValidationIssue, ValidationResult } from './validateBlock';
export { generateBlockDocs } from './generateBlockDocs';
export type { BlockDocsOptions } from './generateBlockDocs';
export type { BlockFieldDefinition, BlockFieldDefinitions } from './ContentBlockContext';
// The built-in blocks' field definitions live in the CSS-free `blocks.fields`
// module, imported directly (`@openstax/flex-page-renderer/blocks.fields`) so
// the index — and consumers who only want the utilities — don't pull every
// block's field module.
