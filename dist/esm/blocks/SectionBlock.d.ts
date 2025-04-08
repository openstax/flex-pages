/// <reference types="react" />
import { ContentBlockConfig } from '../ContentBlocks';
import './SectionBlock.css';
export declare type SectionConfigOptions = {
    type: 'text_alignment';
    value: 'left' | 'right' | 'center';
} | {
    type: 'background_color';
    value: string;
} | {
    type: 'padding';
    value: string;
} | {
    type: 'padding_top';
    value: string;
} | {
    type: 'padding_bottom';
    value: string;
} | {
    type: 'analytics_label';
    value: string;
} | {
    type: 'id';
    value: string;
} | {
    type: 'flex';
    value: 'flex' | 'flex-grow' | 'flex-shrink';
};
export interface SectionBlockConfig {
    id: string;
    type: 'section';
    value: {
        content: ContentBlockConfig[];
        config: SectionConfigOptions[];
    };
}
export declare function SectionBlock({ data }: {
    data: SectionBlockConfig;
}): JSX.Element;
export declare namespace SectionBlock {
    var blockConfig: {
        type: string;
        categories: string[];
        label: string;
        fields: ({
            name: string;
            label: string;
            type: string;
            categories: string[];
            configs?: undefined;
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
                options?: undefined;
                help?: undefined;
            } | {
                name: string;
                label: string;
                help: string;
                type: string;
                options?: undefined;
                pattern?: undefined;
            })[];
            categories?: undefined;
        })[];
    };
}
