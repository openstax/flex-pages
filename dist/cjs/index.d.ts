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
