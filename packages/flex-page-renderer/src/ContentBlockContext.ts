import type React from 'react';
import type { ConfigField } from './index.js';

export type ContentBlockConfig = {
  type: string;
  id: string;
  value: {
    config?: Array<{type: string; value: string}>;
  };
  // Optional external data hydrated onto the node by mapPageNodes (when a block
  // declares a `prefetch` loader and hydration is enabled). The component reads
  // this instead of fetching client-side.
  prefetched?: unknown;
};

// A block's data loader, declared on its definition alongside `config`. Runs
// (server-side) via mapPageNodes; its serializable result is attached to the
// node as `prefetched`. De-duping across repeated lookups is the loader's
// responsibility (e.g. a memoized fetcher).
export type BlockPrefetch = (value: any) => unknown | Promise<unknown>;

export type ConfigMetadata<T> = {
  type: T;
  label: string;
  /* a terse, author-facing summary of what the block is for */
  description?: string;
  categories: string[];
  field?: ConfigField;
  fields?: ConfigField[];
};

/*
 * these types are annoying, and do not work perfectly. i'm sort of
 * ok with that because we're anticipating that the data is being
 * retrieved from a db anyway
 */
export type BlockDataEntry<D> = ContentBlockConfig & {type: keyof D} & Record<string, unknown>;
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
  prefetch?: BlockPrefetch;
};

export type BlockProcessingDefinitions<D> = {
  [K in keyof D]: BlockProcessingDefinition<K>;
};
