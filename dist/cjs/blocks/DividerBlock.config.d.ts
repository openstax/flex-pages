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
        configs: ({
            name: string;
            label: string;
            help: string;
            type: string;
            options?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            options: {
                label: string;
                value: string;
            }[];
            help?: undefined;
        })[];
        required?: undefined;
    })[];
};
