import { ConfigField } from '.';
import React from 'react';

export type ContentBlockConfig = {type: string; id: string;};

export type ConfigMetadata<T> = {
  type: T;
  categories: string[];
  field?: ConfigField;
  fields?: ConfigField[];
};

/*
 * these types are annoying, and do not work perfectly. i'm sort of
 * ok with that because we're anticipating that the data is being
 * retrieved from a db anyway
 */
export type BlockComponent<K = string> = React.ComponentType<{data: any}> & {blockConfig: ConfigMetadata<K>};
export type BlockDataEntry<D> = ContentBlockConfig & {type: keyof D} & Record<string, unknown>;
export type BlockData<D> = BlockDataEntry<D>[];
export type BlockComponents<D> = {
  [key in keyof D]: BlockComponent<key>;
};

export type BlockComponentMap = Record<string, BlockComponent>;
export const BlockContext = React.createContext<BlockComponentMap>({});
