export declare const config: {
    type: string;
    categories: string[];
    label: string;
    description: string;
    fields: ({
        name: string;
        label: string;
        type: string;
        fields: ({
            name: string;
            label: string;
            type: string;
            required: boolean;
        } | {
            name: string;
            label: string;
            type: string;
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
            help: string;
            type: string;
            options?: undefined;
            pattern?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            options: {
                value: string;
                label: string;
            }[];
            help?: undefined;
            pattern?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            pattern: string;
            help: string;
            options?: undefined;
        })[];
        fields?: undefined;
    })[];
};
