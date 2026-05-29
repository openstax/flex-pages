import type React from 'react';
import type { LinkProps } from './components/Link.fields';
import type { ConfigField } from '.';

/*
 * Registry of shared client components that blocks render but must not
 * `import` directly. Importing a client component (e.g. Link, which uses
 * context + onClick) into a block would pull that block into the client
 * graph. Instead the app supplies these as a plain object via ContentBlockRoot
 * and the resolver drills them into every block as a prop, so blocks that only
 * render — never import — them can stay server components.
 */
export type BlockComponentRegistry = {
  Link: React.ComponentType<LinkProps>;
};

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
 * these types are annoying, and do not work perfectly. i'm sort of
 * ok with that because we're anticipating that the data is being
 * retrieved from a db anyway
 */
export type BlockComponent<K = string> = React.ComponentType<{
  data: any;
  components: BlockComponentRegistry;
  activeConditions?: string[];
}> & {blockConfig: ConfigMetadata<K>};
export type BlockDataEntry<D> = ContentBlockConfig & {type: keyof D} & Record<string, unknown>;
export type BlockData<D> = BlockDataEntry<D>[];
export type BlockComponents<D> = {
  [key in keyof D]: BlockComponent<key>;
};
