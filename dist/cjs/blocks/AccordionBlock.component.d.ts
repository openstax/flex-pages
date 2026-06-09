import './AccordionBlock.css';
type AccordionConfigOptions = {
    type: 'heading_level';
    value: string;
} | {
    type: 'allow_multiple';
    value: string;
} | {
    type: 'accent_color';
    value: string;
};
export type AccordionItemConfig = {
    header: string;
    content: string;
    id: string;
};
export interface AccordionBlockConfig {
    id: string;
    type: 'accordion';
    value: {
        items: AccordionItemConfig[];
        config: AccordionConfigOptions[];
    };
}
export declare function AccordionBlock({ data }: {
    data: AccordionBlockConfig;
}): import("react/jsx-runtime").JSX.Element | null;
export {};
