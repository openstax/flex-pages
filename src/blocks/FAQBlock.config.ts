export const config = {
  type: 'faq',
  label: 'FAQ',
  categories: ['content'],
  fields: [
    {name: 'items', label: 'Questions', type: 'list', fields: [
      {name: 'question', label: 'Question', type: 'text', required: true},
      {name: 'answer', label: 'Answer', type: 'rich-text', required: true},
      {name: 'id', label: 'ID', type: 'text',
        help: 'The HTML id of the question (can be referenced by anchor links).'},
    ]},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'heading_level', label: 'Heading Level', type: 'select',
        help: 'Heading level for each question, for the document outline and screen-reader navigation',
        options: [
          {label: 'H2', value: '2'},
          {label: 'H3', value: '3'},
          {label: 'H4', value: '4'},
        ]},
      {name: 'allow_multiple', label: 'Allow Multiple Open', type: 'select',
        help: 'Allow more than one answer to be open at the same time',
        options: [
          {label: 'No', value: 'false'},
          {label: 'Yes', value: 'true'},
        ]},
      {name: 'accent_color', label: 'Accent Color', type: 'text', pattern: '#[a-fA-F0-9]{6}',
        help: 'Hex color for the expand/collapse icon'},
    ]},
  ],
};
