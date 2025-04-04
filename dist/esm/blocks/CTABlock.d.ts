/// <reference types="react" />
import { LinkFields } from '../components/Link';
import './CTABlock.css';
declare type CTALinkConfig = {
    type: 'style';
    value: 'string';
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
    configs: {
        name: string;
        label: string;
        type: string;
        options: {
            label: string;
            value: string;
        }[];
    }[];
})[];
export declare function CTALink({ link }: {
    link: CTALinkFields;
}): JSX.Element;
declare type CTAConfig = {
    type: 'analytics_label';
    value: string;
};
export interface CTABlockConfig {
    id: string;
    type: 'cta_block';
    value: {
        actions: CTALinkFields[];
        config: CTAConfig[];
    };
}
export declare function CTABlock({ data }: {
    data: CTABlockConfig;
}): JSX.Element;
export declare namespace CTABlock {
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
            } | {
                name: string;
                label: string;
                type: string;
                configs: {
                    name: string;
                    label: string;
                    type: string;
                    options: {
                        label: string;
                        value: string;
                    }[];
                }[];
            })[];
            configs?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            configs: {
                name: string;
                label: string;
                help: string;
                type: string;
            }[];
            fields?: undefined;
        })[];
    };
}
export {};
