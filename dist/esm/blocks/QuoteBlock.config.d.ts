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
        required?: undefined;
    })[];
};
