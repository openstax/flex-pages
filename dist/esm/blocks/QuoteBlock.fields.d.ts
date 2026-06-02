export declare const fields: {
    type: string;
    categories: string[];
    label: string;
    fields: ({
        name: string;
        label: string;
        type: string;
        required: boolean;
        fields?: undefined;
        configs?: undefined;
    } | {
        name: string;
        label: string;
        type: string;
        required?: undefined;
        fields?: undefined;
        configs?: undefined;
    } | {
        name: string;
        label: string;
        type: string;
        fields: {
            name: string;
            label: string;
            help: string;
            type: string;
        }[];
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
        fields?: undefined;
    })[];
};
