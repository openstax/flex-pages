import type { ConfigField } from '@openstax/flex-page-renderer';
import React from 'react';
export declare const block: ({ name, label, types, categories }: {
    name: string;
    label: string;
    types?: string[];
    categories?: string[];
}) => React.JSX.Element;
export declare const blocks: ({ name, label, categories }: {
    name: string;
    label?: string;
    categories: string[];
}) => React.JSX.Element;
export declare const configs: ({ name, label, configs }: ConfigField & {
    configs: ConfigField[];
}) => React.JSX.Element;
export declare const list: ({ name, label, max, fields }: ConfigField & {
    max?: number;
    fields: ConfigField[];
}) => React.JSX.Element;
