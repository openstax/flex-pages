import type { ConfigField } from '@openstax/flex-page-renderer';
export declare const block: ({ name, label, types, categories }: {
    name: string;
    label: string;
    types?: string[];
    categories?: string[];
}) => import("react/jsx-runtime").JSX.Element;
export declare const blocks: ({ name, label, categories }: {
    name: string;
    label?: string;
    categories: string[];
}) => import("react/jsx-runtime").JSX.Element;
export declare const configs: ({ name, label, configs }: ConfigField & {
    configs: ConfigField[];
}) => import("react/jsx-runtime").JSX.Element;
export declare const list: ({ name, label, max, fields }: ConfigField & {
    max?: number;
    fields: ConfigField[];
}) => import("react/jsx-runtime").JSX.Element;
