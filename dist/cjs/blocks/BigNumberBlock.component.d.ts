import './BigNumberBlock.css';
export interface BigNumberBlockConfig {
    id: string;
    type: 'big_number';
    value: {
        number: string;
        caption?: string;
        color?: 'blue' | 'green' | 'orange';
    };
}
export declare function BigNumberBlock({ data }: {
    data: BigNumberBlockConfig;
}): import("react").JSX.Element;
