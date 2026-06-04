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
export type BlockDataEntry<D> = ContentBlockConfig & {
    type: keyof D;
} & Record<string, unknown>;
export type BlockData<D> = BlockDataEntry<D>[];
export type BlockRenderingDefinition<K> = {
    Component: React.ComponentType<{
        data: any;
        activeConditions?: string[];
    }>;
    config: ConfigMetadata<K>;
};
export type BlockRenderingDefinitions<D> = {
    [K in keyof D]: BlockRenderingDefinition<K>;
};
export type BlockProcessingDefinition<K> = {
    config: ConfigMetadata<K>;
};
export type BlockProcessingDefinitions<D> = {
    [K in keyof D]: BlockProcessingDefinition<K>;
};
