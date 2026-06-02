import './RichTextBlock.css';
export interface RichTextBlockConfig {
    id: string;
    type: 'text';
    value: string;
}
export declare function RichTextContent({ html }: {
    html: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function RichTextBlock({ data }: {
    data: RichTextBlockConfig;
}): import("react/jsx-runtime").JSX.Element;
