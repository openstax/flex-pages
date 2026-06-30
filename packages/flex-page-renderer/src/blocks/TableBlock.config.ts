import { ctaLinkFieldConfig, CTALinkFields } from './CTABlock.config.js';

// Config-only module (no client component) so server/data tooling can read it.

export interface TableCellConfig {
  // Rich-text cell content. Ignored when `cta` is set.
  content?: string;
  // Optional CTA rendered in place of the rich text (max 1).
  cta?: CTALinkFields[];
}

export interface TableColumnConfig {
  header: string;
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

export const config = {
  type: 'table',
  categories: ['content'],
  label: 'Table',
  description: 'An accessible data table with a header row and caption. Cells hold rich text or a call-to-action; rows stack on mobile. Optional zebra striping (custom hex), condensed spacing, sorting, and filtering.',
  fields: [
    {name: 'caption', label: 'Caption', type: 'text',
      help: 'Describes the table; rendered as a <caption> for accessibility.'},
    {name: 'columns', label: 'Columns', type: 'list', fields: [
      {name: 'header', label: 'Header', type: 'text', required: true},
    ]},
    {name: 'rows', label: 'Rows', type: 'list', fields: [
      {name: 'cells', label: 'Cells', type: 'list', fields: [
        {name: 'content', label: 'Content', type: 'rich-text'},
        {name: 'cta', label: 'Call To Action', type: 'list', fields: ctaLinkFieldConfig, max: 1},
      ]},
    ]},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'striped', label: 'Zebra Striping', type: 'select', options: [
        {label: 'Off', value: 'off'},
        {label: 'On', value: 'on'},
      ], help: 'Shade alternating rows. Default shade unless Row Colors is set.'},
      {name: 'row_colors', label: 'Row Colors', type: 'text',
        help: 'Comma-separated hex colors cycled across body rows, e.g. #ffffff,#f2f2f2. Overrides the default zebra shade.'},
      {name: 'condensed', label: 'Condensed', type: 'select', options: [
        {label: 'Off', value: 'off'},
        {label: 'On', value: 'on'},
      ], help: 'Tighter cell padding.'},
      {name: 'sortable', label: 'Sortable Columns', type: 'select', options: [
        {label: 'Off', value: 'off'},
        {label: 'On', value: 'on'},
      ], help: 'Let readers sort by clicking column headers.'},
      {name: 'filterable', label: 'Filter Box', type: 'select', options: [
        {label: 'Off', value: 'off'},
        {label: 'On', value: 'on'},
      ], help: 'Show a text box that filters rows by their content.'},
    ]},
  ],
};
