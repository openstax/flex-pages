import { LinkFields } from '../components/Link';
import './LinksBlock.css';
type LinksConfig = {
    type: 'color';
    value: string;
} | {
    type: 'custom_color';
    value: string;
} | {
    type: 'layout';
    value: string;
} | {
    type: 'size';
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
}): import("react/jsx-runtime").JSX.Element;
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
                pattern?: undefined;
            } | {
                name: string;
                label: string;
                type: string;
                options: {
                    value: string;
                    label: string;
                }[];
                help?: undefined;
                pattern?: undefined;
            } | {
                name: string;
                label: string;
                type: string;
                pattern: string;
                help: string;
                options?: undefined;
            })[];
            fields?: undefined;
        })[];
    };
}
export {};
