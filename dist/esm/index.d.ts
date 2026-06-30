export type ConfigField = {
    name: string;
    label: string;
    help?: string;
    type: string;
    required?: boolean;
    pattern?: string;
    options?: Array<{
        label: string;
        value: string;
    }>;
    fields?: ConfigField[];
    max?: number;
    categories?: string[];
    configs?: ConfigField[];
    [key: string]: unknown;
};
export { resolveContentBlocks } from './resolveContentBlocks.js';
