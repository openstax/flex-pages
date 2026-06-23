
export type ConfigField = {
  name: string;
  label: string;
  help?: string;
  type: string;
  required?: boolean;

  // for type=text
  pattern?: string;

  // for type=select
  options?: Array<{ label: string; value: string }>;

  // for type=list
  fields?: ConfigField[];
  max?: number;

  // for type=blocks
  categories?: string[];

  // for type=configs
  configs?: ConfigField[];

  [key: string]: unknown;
};

export { resolveContentBlocks } from './resolveContentBlocks.js';
