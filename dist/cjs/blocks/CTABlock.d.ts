import { LinkFields } from '../components/Link';
import './CTABlock.css';
type CTALinkConfig = {
    type: 'style';
    value: 'string';
} | {
    type: 'custom_color';
    value: string;
};
export interface CTALinkFields extends LinkFields {
    config: CTALinkConfig[];
}
export declare const ctaLinkFieldConfig: ({
    name: string;
    label: string;
    type: string;
    required: boolean;
} | {
    name: string;
    label: string;
    type: string;
    required?: undefined;
} | {
    name: string;
    label: string;
    type: string;
    configs: ({
        name: string;
        label: string;
        type: string;
        options: {
            label: string;
            value: string;
        }[];
        pattern?: undefined;
        help?: undefined;
    } | {
        name: string;
        label: string;
        type: string;
        pattern: string;
        help: string;
        options?: undefined;
    })[];
})[];
export declare function CTALink({ link }: {
    link: CTALinkFields;
}): import("react/jsx-runtime").JSX.Element;
type CTAConfig = {
    type: 'analytics_label';
    value: string;
} | {
    type: 'layout';
    value: 'inline';
};
export interface CTABlockConfig {
    id: string;
    type: 'cta_block';
    value: {
        description?: string;
        actions: CTALinkFields[];
        config: CTAConfig[];
    };
}
export declare function CTABlock({ data }: {
    data: CTABlockConfig;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace CTABlock {
    var blockConfig: {
        type: string;
        categories: string[];
        label: string;
        fields: ({
            name: string;
            label: string;
            type: string;
            fields?: undefined;
            configs?: undefined;
        } | {
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
            } | {
                name: string;
                label: string;
                type: string;
                configs: ({
                    name: string;
                    label: string;
                    type: string;
                    options: {
                        label: string;
                        value: string;
                    }[];
                    pattern?: undefined;
                    help?: undefined;
                } | {
                    name: string;
                    label: string;
                    type: string;
                    pattern: string;
                    help: string;
                    options?: undefined;
                })[];
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
                    label: string;
                    value: string;
                }[];
                help?: undefined;
            })[];
            fields?: undefined;
        })[];
    };
}
export {};
