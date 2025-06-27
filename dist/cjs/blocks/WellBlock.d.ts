/// <reference types="react" />
import { ContentBlockConfig } from '../ContentBlocks';
import './WellBlock.css';
export declare type WellConfigOptions = {
    type: 'background_color';
    value: string;
} | {
    type: 'border_radius';
    value: string;
} | {
    type: 'padding';
    value: string;
} | {
    type: 'margin';
    value: string;
} | {
    type: 'text_alignment';
    value: 'left' | 'right' | 'center';
} | {
    type: 'analytics_label';
    value: string;
} | {
    type: 'id';
    value: string;
};
export interface WellBlockConfig {
    id: string;
    type: 'well';
    value: {
        content: ContentBlockConfig[];
        config: WellConfigOptions[];
    };
}
export declare function WellBlock({ data }: {
    data: WellBlockConfig;
}): JSX.Element;
export declare namespace WellBlock {
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
                pattern: string;
                help?: undefined;
                options?: undefined;
            } | {
                name: string;
                label: string;
                help: string;
                type: string;
                pattern?: undefined;
                options?: undefined;
            } | {
                name: string;
                label: string;
                type: string;
                options: {
                    label: string;
                    value: string;
                }[];
                pattern?: undefined;
                help?: undefined;
            })[];
            categories?: undefined;
        })[];
    };
}
