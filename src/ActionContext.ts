import React from 'react';
import { ConfigField } from './index.js';

export type ActionConfig = Record<string, {
  id: string;
  label: string;
  handler?: (params?: Record<string, any>) => void;
  fields?: ConfigField[];
}>;

export const ActionContext = React.createContext<ActionConfig>({});
