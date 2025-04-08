/// <reference types="react" />
import { LinkFields } from '../components/Link';
import './LinksBlock.css';
declare type LinksConfig = {
    type: 'color';
    value: string;
} | {
    type: 'analytics_label';
    value: string;
};
export interface LinksBlockConfig {
    id: string;
    type: 'links_group';
    value: {
        links: LinkFields[];
        config: LinksConfig[];
    };
}
export declare function LinksBlock({ data }: {
    data: LinksBlockConfig;
}): JSX.Element;
export declare namespace LinksBlock {
    var blockConfig: {
        type: string;
        categories: string[];
        label: string;
        fields: ({
            name: string;
            label: string;
            type: string;
            fields: ({
                name: string;
                label: string;
                type: string;
                required: boolean;
            } | {
                name: string;
                label: string;
                type: string;
                required?: undefined;
            })[];
            configs?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            configs: ({
                name: string;
                label: string;
                help: string;
                type: string;
                options?: undefined;
            } | {
                name: string;
                label: string;
                type: string;
                options: {
                    value: string;
                    label: string;
                }[];
                help?: undefined;
            })[];
            fields?: undefined;
        })[];
    };
}
export {};
