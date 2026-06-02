export type ConfigField = {
    name: string;
    label: string;
    help?: string;
    type: string;
    [key: string]: unknown;
};
export { resolveContentBlocks } from './resolveContentBlocks';
export * from './ContentBlockRoot';
export * from './FlexPageContextProvider';
export * as blocks from './blocks';
