export declare const fields: {
    type: string;
    categories: string[];
    label: string;
    fields: ({
        name: string;
        label: string;
        type: string;
        categories: string[];
        fields?: undefined;
        configs?: undefined;
    } | {
        name: string;
        label: string;
        type: string;
        categories?: undefined;
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
        categories?: undefined;
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
            options?: undefined;
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
            help: string;
            type: string;
            options?: undefined;
            pattern?: undefined;
        })[];
        categories?: undefined;
        fields?: undefined;
    })[];
};
