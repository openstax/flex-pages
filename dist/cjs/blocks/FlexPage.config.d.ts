export declare const config: {
    type: string;
    categories: string[];
    label: string;
    fields: ({
        name: string;
        label: string;
        type: string;
        categories: string[];
        required: boolean;
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
        required?: undefined;
    })[];
};
