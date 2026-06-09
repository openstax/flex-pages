export declare const config: {
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
            help?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            help: string;
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
            help: string;
            options: {
                label: string;
                value: string;
            }[];
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
