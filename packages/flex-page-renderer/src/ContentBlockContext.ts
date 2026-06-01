import type React from 'react';
import type { ConfigField } from '.';

export type ContentBlockConfig = {
  type: string;
  id: string;
  value: {
    config?: Array<{type: string; value: string}>;
  };
};

export type ConfigMetadata<T> = {
  type: T;
  label: string;
  categories: string[];
  field?: ConfigField;
  fields?: ConfigField[];
};

/*
 * A block definition pairs the (possibly client) Component with its `fields`
 * config. `fields` lives in its own directive-free module, so it stays readable
 * on both sides of the client/server boundary — a client Component survives only
 * as a reference on the server, but its `fields` remain real, readable data
 * (used by the editor, and by server-side page pre-processing).
 *
 * these types are annoying, and do not work perfectly. i'm sort of
 * ok with that because we're anticipating that the data is being
 * retrieved from a db anyway
 */
export type BlockDefinition<K = string> = {
  Component: React.ComponentType<{
    data: any;
    activeConditions?: string[];
  }>;
  fields: ConfigMetadata<K>;
};

export type BlockDataEntry<D> = ContentBlockConfig & {type: keyof D} & Record<string, unknown>;
export type BlockData<D> = BlockDataEntry<D>[];
export type BlockDefinitions<D> = {
  [key in keyof D]: BlockDefinition<key>;
};
