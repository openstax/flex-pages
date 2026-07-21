import type { BlockProcessingDefinitions } from './ContentBlockContext.js';
export type BlockDocsOptions = {
    title?: string;
    intro?: string[];
};
export declare function generateBlockDocs<D extends BlockProcessingDefinitions<any>>(definitions: D, options?: BlockDocsOptions): string;
