export const config = {
  type: 'tabbed_content',
  label: 'Tabbed Content',
  categories: ['structure'],
  fields: [
    {name: 'tabs', label: 'Tabs', type: 'list', fields: [
      {name: 'label', label: 'Tab Label', type: 'text', required: true},
      {name: 'content', label: 'Tab Content', type: 'blocks', categories: ['structure']},
    ]},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'tab_alignment', label: 'Tab Alignment', type: 'select', options: [
        {label: 'Left', value: 'left'},
        {label: 'Center', value: 'center'},
        {label: 'Right', value: 'right'},
      ]},
      {name: 'active_color', label: 'Active Tab Color', type: 'text', pattern: '#[a-fA-F0-9]{6}',
        help: 'Hex color for the active tab underline'},
      {name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-F0-9]{6}'},
      {name: 'gradient_color', label: 'Gradient To Color', type: 'text', pattern: '#[a-fA-F0-9]{6}',
        help: 'Second color for gradient effect. Background Color is the starting color.'},
      {name: 'gradient_direction', label: 'Gradient Direction', type: 'select', options: [
        {label: 'Top to Bottom', value: 'to bottom'},
        {label: 'Bottom to Top', value: 'to top'},
        {label: 'Left to Right', value: 'to right'},
        {label: 'Right to Left', value: 'to left'},
        {label: 'Top-Left to Bottom-Right', value: 'to bottom right'},
        {label: 'Top-Right to Bottom-Left', value: 'to bottom left'},
        {label: 'Bottom-Left to Top-Right', value: 'to top right'},
        {label: 'Bottom-Right to Top-Left', value: 'to top left'},
      ]},
      {name: 'default_tab', label: 'Default Tab', type: 'number',
        help: 'Zero-based index of the tab to show by default'},
      {name: 'analytics_label', label: 'Analytics Label',
        help: 'Analytics events from within this block will include this label', type: 'text'},
      {name: 'border_width', label: 'Border Width', type: 'select', options: [
        {label: 'Content Width', value: 'content'},
        {label: 'Full Width', value: 'full'},
      ]},
      {name: 'id', label: 'ID',
        help: 'The HTML id of the tabbed content block (can be referenced by anchor links).', type: 'text'},
    ]},
  ],
};
