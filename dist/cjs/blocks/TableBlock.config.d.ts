import { CTALinkFields } from './CTABlock.config.js';
export interface TableCellConfig {
    content?: string;
    cta?: CTALinkFields[];
}
export interface TableColumnConfig {
    header: string;
    type?: 'text' | 'number' | 'date';
}
export interface TableRowConfig {
    cells: TableCellConfig[];
}
type TableConfigOption = {
    type: 'striped';
    value: string;
} | {
    type: 'condensed';
    value: string;
} | {
    type: 'row_colors';
    value: string;
} | {
    type: 'sortable';
    value: string;
} | {
    type: 'filterable';
    value: string;
} | {
    type: 'default_sort_column';
    value: string;
} | {
    type: 'default_sort_direction';
    value: string;
} | {
    type: 'row_limit';
    value: string;
} | {
    type: 'empty_message';
    value: string;
} | {
    type: 'id';
    value: string;
};
export interface TableBlockConfig {
    id: string;
    type: 'table';
    value: {
        caption?: string;
        columns: TableColumnConfig[];
        rows: TableRowConfig[];
        config: TableConfigOption[];
    };
}
export declare const config: {
    type: string;
    categories: string[];
    label: string;
    description: string;
    fields: ({
        name: string;
        label: string;
        type: string;
        help: string;
        fields?: undefined;
        configs?: undefined;
    } | {
        name: string;
        label: string;
        type: string;
        fields: ({
            name: string;
            label: string;
            type: string;
            required: boolean;
            options?: undefined;
            help?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            options: {
                label: string;
                value: string;
            }[];
            help: string;
            required?: undefined;
        })[];
        help?: undefined;
        configs?: undefined;
    } | {
        name: string;
        label: string;
        type: string;
        fields: {
            name: string;
            label: string;
            type: string;
            fields: ({
                name: string;
                label: string;
                type: string;
                fields?: undefined;
                max?: undefined;
            } | {
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
                    })[];
                })[];
                max: number;
            })[];
        }[];
        help?: undefined;
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
            help: string;
            pattern?: undefined;
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
            help: string;
            options?: undefined;
            pattern?: undefined;
        })[];
        help?: undefined;
        fields?: undefined;
    })[];
};
export {};
