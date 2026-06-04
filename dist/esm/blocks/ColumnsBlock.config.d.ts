export declare const config: {
    type: string;
    label: string;
    categories: string[];
    fields: ({
        name: string;
        label: string;
        type: string;
        categories: string[];
        required: boolean;
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
            disabledWhen?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            pattern: string;
            help: string;
            options?: undefined;
            disabledWhen?: undefined;
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
            disabledWhen?: undefined;
        } | {
            name: string;
            label: string;
            help: string;
            type: string;
            pattern?: undefined;
            options?: undefined;
            disabledWhen?: undefined;
        } | {
            name: string;
            label: string;
            help: string;
            type: string;
            disabledWhen: (data: any) => boolean;
            pattern?: undefined;
            options?: undefined;
        })[];
        categories?: undefined;
        required?: undefined;
    })[];
};
