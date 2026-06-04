import type React from 'react';
import type { ConfigField } from './index.js';
export type ContentBlockConfig = {
    type: string;
    id: string;
    value: {
        config?: Array<{
            type: string;
            value: string;
        }>;
    };
};
export type ConfigMetadata<T> = {
    type: T;
    label: string;
    categories: string[];
    field?: ConfigField;
    fields?: ConfigField[];
};
export type BlockDefinition<K = string> = {
    Component: React.ComponentType<{
        data: any;
        activeConditions?: string[];
    }>;
    fields: ConfigMetadata<K>;
};
export type BlockFieldDefinition = Pick<BlockDefinition, 'fields'>;
export type BlockFieldDefinitions = Record<string, BlockFieldDefinition>;
export type BlockDataEntry<D> = ContentBlockConfig & {
    type: keyof D;
} & Record<string, unknown>;
export type BlockData<D> = BlockDataEntry<D>[];
export type BlockDefinitions<D> = {
    [key in keyof D]: BlockDefinition<key>;
};
