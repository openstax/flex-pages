
export type ConfigField = {
  name: string;
  label: string;
  help?: string;
  type: string;
  [key: string]: unknown;
};

export { resolveContentBlocks } from './resolveContentBlocks';
