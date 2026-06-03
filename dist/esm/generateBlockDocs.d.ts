import type { BlockDefinition } from './ContentBlockContext';
export type BlockDocsOptions = {
    title?: string;
    intro?: string[];
};
export declare function generateBlockDocs(definitions: Record<string, BlockDefinition>, options?: BlockDocsOptions): string;
