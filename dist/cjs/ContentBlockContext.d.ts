import { ConfigField } from '.';
import React from 'react';
export declare type ContentBlockConfig = {
    type: string;
    id: string;
};
export declare type ConfigMetadata<T> = {
    type: T;
    label: string;
    categories: string[];
    field?: ConfigField;
    fields?: ConfigField[];
};
export declare type BlockComponent<K = string> = React.ComponentType<{
    data: any;
}> & {
    blockConfig: ConfigMetadata<K>;
};
export declare type BlockDataEntry<D> = ContentBlockConfig & {
    type: keyof D;
} & Record<string, unknown>;
export declare type BlockData<D> = BlockDataEntry<D>[];
export declare type BlockComponents<D> = {
    [key in keyof D]: BlockComponent<key>;
};
export declare type BlockComponentMap = Record<string, BlockComponent>;
export declare const BlockContext: React.Context<BlockComponentMap>;
