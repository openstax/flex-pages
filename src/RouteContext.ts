import React from 'react';
import { ConfigField } from './index.js';

export type RouteConfig = Record<string, {
  id: string;
  label: string;
  handler: (params?: Record<string, any>) => void;
  render: (params?: Record<string, any>) => string;
  fields?: ConfigField[];
}>;

export const RouteContext = React.createContext<RouteConfig>({});
