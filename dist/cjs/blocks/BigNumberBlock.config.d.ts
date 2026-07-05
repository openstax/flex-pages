export declare const config: {
    type: string;
    categories: string[];
    label: string;
    description: string;
    fields: ({
        name: string;
        label: string;
        type: string;
        required: boolean;
        help: string;
        options?: undefined;
    } | {
        name: string;
        label: string;
        type: string;
        help: string;
        required?: undefined;
        options?: undefined;
    } | {
        name: string;
        label: string;
        type: string;
        help: string;
        options: {
            label: string;
            value: string;
        }[];
        required?: undefined;
    })[];
};
