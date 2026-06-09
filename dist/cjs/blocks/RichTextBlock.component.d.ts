import './RichTextBlock.css';
export interface RichTextBlockConfig {
    id: string;
    type: 'text';
    value: string;
}
export declare function RichTextContent({ html, id, className, hidden }: {
    html: string;
    id?: string;
    className?: string;
    hidden?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export declare function RichTextBlock({ data }: {
    data: RichTextBlockConfig;
}): import("react/jsx-runtime").JSX.Element;
