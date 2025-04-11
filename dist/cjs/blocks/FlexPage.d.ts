/// <reference types="react" />
import "./FlexPage.css";
import { ContentBlockConfig } from '../ContentBlocks';
export declare type FlexPageConfigOptions = {
    type: 'height';
    value: string;
} | {
    type: 'width';
    value: string;
};
export interface FlexPageConfig {
    id: string;
    type: 'flex_page';
    value: {
        content: ContentBlockConfig[];
        config: FlexPageConfigOptions[];
    };
}
export declare function FlexPage({ data }: {
    data: FlexPageConfig;
}): JSX.Element;
export declare namespace FlexPage {
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
            configs: {
                name: string;
                label: string;
                type: string;
                options: {
                    label: string;
                    value: string;
                }[];
            }[];
            categories?: undefined;
        })[];
    };
}
