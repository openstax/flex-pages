import type { BlockDefinition, ContentBlockConfig } from './ContentBlockContext';
type BlockMap = Record<string, BlockDefinition>;
export type ValidationCode = 'unknown-block' | 'invalid-category' | 'required' | 'type-mismatch' | 'invalid-option' | 'pattern-mismatch' | 'invalid-image' | 'invalid-link-target' | 'unknown-config';
export type ValidationIssue = {
    path: string;
    code: ValidationCode;
    severity: 'error' | 'warning';
    message: string;
    blockId?: string;
    blockType?: string;
    field?: string;
};
export type ValidationResult = {
    valid: true;
} | {
    valid: false;
    issues: ValidationIssue[];
};
export declare function validateBlock(root: ContentBlockConfig, definitions: BlockMap): ValidationResult;
export {};
