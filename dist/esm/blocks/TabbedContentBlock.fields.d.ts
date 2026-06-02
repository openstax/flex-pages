export declare const fields: {
    type: string;
    label: string;
    categories: string[];
    fields: ({
        name: string;
        label: string;
        type: string;
        fields: ({
            name: string;
            label: string;
            type: string;
            required: boolean;
            categories?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            categories: string[];
            required?: undefined;
        })[];
        configs?: undefined;
    } | {
        name: string;
        label: string;
        type: string;
        configs: ({
            name: string;
            label: string;
            type: string;
            options: {
                label: string;
                value: string;
            }[];
            pattern?: undefined;
            help?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            pattern: string;
            help: string;
            options?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            pattern: string;
            options?: undefined;
            help?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            help: string;
            options?: undefined;
            pattern?: undefined;
        })[];
        fields?: undefined;
    })[];
};
