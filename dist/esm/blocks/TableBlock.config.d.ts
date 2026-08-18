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
    id: string;
    value: string;
} | {
    type: 'condensed';
    id: string;
    value: string;
} | {
    type: 'row_colors';
    id: string;
    value: string;
} | {
    type: 'sortable';
    id: string;
    value: string;
} | {
    type: 'filterable';
    id: string;
    value: string;
} | {
    type: 'default_sort_column';
    id: string;
    value: string;
} | {
    type: 'default_sort_direction';
    id: string;
    value: string;
} | {
    type: 'row_limit';
    id: string;
    value: string;
} | {
    type: 'empty_message';
    id: string;
    value: string;
} | {
    type: 'id';
    id: string;
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
