import type { BlockFieldDefinitions } from './ContentBlockContext.js';
export type { BlockFieldDefinition, BlockFieldDefinitions } from './ContentBlockContext.js';
export type BlockDocsOptions = {
    title?: string;
    intro?: string[];
};
export declare function generateBlockDocs(definitions: BlockFieldDefinitions, options?: BlockDocsOptions): string;
