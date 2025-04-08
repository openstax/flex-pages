/// <reference types="react" />
import type { ConfigField } from '@openstax/flex-page-renderer';
export declare const block: ({ name, label, types, categories }: {
    name: string;
    label: string;
    types?: string[] | undefined;
    categories?: string[] | undefined;
}) => JSX.Element;
export declare const blocks: ({ name, label, categories }: {
    name: string;
    label?: string | undefined;
    categories: string[];
}) => JSX.Element;
export declare const configs: ({ name, label, configs }: ConfigField & {
    configs: ConfigField[];
}) => JSX.Element;
export declare const list: ({ name, label, max, fields }: ConfigField & {
    max?: number | undefined;
    fields: ConfigField[];
}) => JSX.Element;
