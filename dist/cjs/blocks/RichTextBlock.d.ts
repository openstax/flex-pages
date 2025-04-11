/// <reference types="react" />
import './RichTextBlock.css';
export interface RichTextBlockConfig {
    id: string;
    type: 'text';
    value: string;
}
export declare function RichTextContent({ html }: {
    html: string;
}): JSX.Element;
export declare function RichTextBlock({ data }: {
    data: RichTextBlockConfig;
}): JSX.Element;
export declare namespace RichTextBlock {
    var blockConfig: {
        type: string;
        categories: string[];
        label: string;
        field: {
            name: string;
            label: string;
            type: string;
        };
    };
}
