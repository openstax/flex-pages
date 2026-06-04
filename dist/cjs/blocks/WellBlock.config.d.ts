export declare const config: {
    type: string;
    categories: string[];
    label: string;
    fields: ({
        name: string;
        label: string;
        type: string;
        categories: string[];
        configs?: undefined;
    } | {
        name: string;
        label: string;
        type: string;
        configs: ({
            name: string;
            label: string;
            type: string;
            pattern: string;
            help?: undefined;
            options?: undefined;
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
            options: {
                label: string;
                value: string;
            }[];
            pattern?: undefined;
            help?: undefined;
        } | {
            name: string;
            label: string;
            help: string;
            type: string;
            pattern?: undefined;
            options?: undefined;
        })[];
        categories?: undefined;
    })[];
};
