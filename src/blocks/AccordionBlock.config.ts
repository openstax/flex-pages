export const config = {
  type: 'accordion',
  label: 'Accordion',
  categories: ['content'],
  description: 'A list of collapsible items that reveal their content on demand; well suited to FAQs and follows WAI-ARIA accordion guidance.',
  fields: [
    {name: 'items', label: 'Items', type: 'list', fields: [
      {name: 'header', label: 'Header', type: 'text', required: true},
      {name: 'content', label: 'Content', type: 'rich-text', required: true},
      {name: 'id', label: 'ID', type: 'text',
        help: 'The HTML id of the item (can be referenced by anchor links).'},
    ]},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'heading_level', label: 'Heading Level', type: 'select',
        help: 'Heading level for each item, for the document outline and screen-reader navigation',
        options: [
          {label: 'H2', value: '2'},
          {label: 'H3', value: '3'},
          {label: 'H4', value: '4'},
        ]},
      {name: 'allow_multiple', label: 'Allow Multiple Open', type: 'select',
        help: 'Allow more than one panel to be open at the same time',
        options: [
          {label: 'No', value: 'false'},
          {label: 'Yes', value: 'true'},
        ]},
      {name: 'accent_color', label: 'Accent Color', type: 'text', pattern: '#[a-fA-F0-9]{6}',
        help: 'Hex color for the expand/collapse icon and item divider.'},
      {name: 'accent_colors', label: 'Accent Colors', type: 'text',
        pattern: '#[a-fA-F0-9]{6}(\\s*,\\s*#[a-fA-F0-9]{6})*',
        help: 'Comma-separated hex colors cycled per item, e.g. #ff0000,#00ff00. Overrides Accent Color.'},
      {name: 'top_border_color', label: 'Top Border Color', type: 'text', pattern: '#[a-fA-F0-9]{6}',
        help: 'Adds a colored border above the whole accordion.'},
    ]},
  ],
};
