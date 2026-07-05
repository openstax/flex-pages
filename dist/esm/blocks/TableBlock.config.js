import { ctaLinkFieldConfig } from './CTABlock.config.js';
export const config = {
    type: 'table',
    categories: ['content'],
    label: 'Table',
    description: 'An accessible data table with a header row and caption. Cells hold rich text or a call-to-action; rows stack on mobile. Optional zebra striping (default shade), custom row colors (hex list), condensed spacing, sorting, and filtering.',
    fields: [
        { name: 'caption', label: 'Caption', type: 'text',
            help: 'Describes the table; rendered as a <caption> for accessibility.' },
        { name: 'columns', label: 'Columns', type: 'list', fields: [
                { name: 'header', label: 'Header', type: 'text', required: true },
                { name: 'type', label: 'Sort Type', type: 'select', options: [
                        { label: 'Text', value: 'text' },
                        { label: 'Number', value: 'number' },
                        { label: 'Date', value: 'date' },
                    ], help: 'How readers sort this column. Default text.' },
            ] },
        { name: 'rows', label: 'Rows', type: 'list', fields: [
                { name: 'cells', label: 'Cells', type: 'list', fields: [
                        { name: 'content', label: 'Content', type: 'rich-text' },
                        { name: 'cta', label: 'Call To Action', type: 'list', fields: ctaLinkFieldConfig, max: 1 },
                    ] },
            ] },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'striped', label: 'Zebra Striping', type: 'select', options: [
                        { label: 'Off', value: 'off' },
                        { label: 'On', value: 'on' },
                    ], help: 'Shade alternating rows. Default shade unless Row Colors is set.' },
                { name: 'row_colors', label: 'Row Colors', type: 'text',
                    pattern: '#[a-fA-F0-9]{6}(\\s*,\\s*#[a-fA-F0-9]{6})*',
                    help: 'Comma-separated hex colors cycled across body rows, e.g. #ffffff,#f2f2f2. Overrides the default zebra shade.' },
                { name: 'condensed', label: 'Condensed', type: 'select', options: [
                        { label: 'Off', value: 'off' },
                        { label: 'On', value: 'on' },
                    ], help: 'Tighter cell padding.' },
                { name: 'sortable', label: 'Sortable Columns', type: 'select', options: [
                        { label: 'Off', value: 'off' },
                        { label: 'On', value: 'on' },
                    ], help: 'Let readers sort by clicking column headers.' },
                { name: 'filterable', label: 'Filter Box', type: 'select', options: [
                        { label: 'Off', value: 'off' },
                        { label: 'On', value: 'on' },
                    ], help: 'Show a text box that filters rows by their content.' },
                { name: 'default_sort_column', label: 'Default Sort Column', type: 'number',
                    help: '1-based column number the table is sorted by on load.' },
                { name: 'default_sort_direction', label: 'Default Sort Direction', type: 'select', options: [
                        { label: 'Ascending', value: 'asc' },
                        { label: 'Descending', value: 'desc' },
                    ], help: 'Direction for the default sort. Default ascending.' },
                { name: 'row_limit', label: 'Row Limit', type: 'number',
                    help: 'Show at most this many rows, with a "Show more" control for the rest.' },
                { name: 'empty_message', label: 'Empty Message', type: 'text',
                    help: 'Shown when the table has no rows (e.g. a dynamic source returns nothing).' },
                { name: 'id', label: 'ID', type: 'text',
                    help: 'The HTML id of the table (can be referenced by anchor links).' },
            ] },
    ],
};
