/// <reference types="react" />
export interface HTMLBlockConfig {
    id: string;
    type: 'html';
    value: string;
}
export declare function HTMLBlock({ data }: {
    data: HTMLBlockConfig;
}): JSX.Element;
export declare namespace HTMLBlock {
    var blockConfig: {
        type: string;
        categories: string[];
        label: string;
        field: {
            name: string;
            label: string;
            help: string;
            type: string;
        };
    };
}
