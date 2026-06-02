import React from 'react';
import { ConfigField } from '.';
export type ActionConfig = Record<string, {
    id: string;
    label: string;
    handler?: (params?: Record<string, any>) => void;
    fields?: ConfigField[];
}>;
export declare const ActionContext: React.Context<ActionConfig>;
