export const config = {
  type: 'tabs',
  label: 'Tabbed Content',
  categories: ['content'],
  description: 'Organizes content blocks into switchable tabbed panels, following WAI-ARIA tab keyboard patterns.',
  fields: [
    {name: 'tabs', label: 'Tabs', type: 'list', fields: [
      {name: 'label', label: 'Tab Label', type: 'text', required: true},
      {name: 'content', label: 'Tab Content', type: 'blocks', categories: ['content']},
    ]},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'flex', label: 'Height', type: 'select', options: [
        {label: 'Grow to fill available page space', value: 'flex-grow'},
        {label: 'Shrink to fit available page space', value: 'flex-shrink'},
        {label: 'Fit to available page space', value: 'flex'},
      ]},
      {name: 'tab_alignment', label: 'Tab Alignment', type: 'select', options: [
        {label: 'Left', value: 'left'},
        {label: 'Center', value: 'center'},
        {label: 'Right', value: 'right'},
      ]},
      {name: 'active_color', label: 'Active Tab Color', type: 'text', pattern: '#[a-fA-F0-9]{6}',
        help: 'Hex color for the active tab underline'},
      {name: 'default_tab', label: 'Default Tab', type: 'number',
        help: 'Zero-based index of the tab to show by default'},
      {name: 'analytics_label', label: 'Analytics Label',
        help: 'Analytics events from within this block will include this label', type: 'text'},
      {name: 'id', label: 'ID',
        help: 'The HTML id of the tabs block (can be referenced by anchor links).', type: 'text'},
    ]},
  ],
};
