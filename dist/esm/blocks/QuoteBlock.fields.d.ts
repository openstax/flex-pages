export declare const fields: {
    type: string;
    categories: string[];
    label: string;
    fields: ({
        name: string;
        label: string;
        type: string;
        required: boolean;
        configs?: undefined;
    } | {
        name: string;
        label: string;
        type: string;
        required?: undefined;
        configs?: undefined;
    } | {
        name: string;
        label: string;
        type: string;
        configs: {
            name: string;
            label: string;
            type: string;
            pattern: string;
            help: string;
        }[];
        required?: undefined;
    })[];
};
