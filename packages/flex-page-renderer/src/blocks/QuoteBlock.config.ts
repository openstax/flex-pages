export const config = {
  type: 'quote',
  categories: ['content'],
  label: 'Quote',
  description: 'A testimonial showing a quote alongside the quotee\'s name, title, and photo.',
  fields: [
    {name: 'content', label: 'Quote Text', type: 'long-text', required: true},
    {name: 'title', label: 'Quotee\'s title', type: 'text'},
    {name: 'name', label: 'Quotee\'s name', type: 'text', required: true},
    {name: 'image', label: 'Image', type: 'image', required: true},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'layout', label: 'Layout', type: 'select', help: 'How the image and text are arranged. Compact is a small image + short text ("did you know") treatment.', options: [
        {label: 'Image Left', value: 'image-left'},
        {label: 'Image Right', value: 'image-right'},
        {label: 'Image Top', value: 'image-top'},
        {label: 'Compact', value: 'compact'},
      ]},
      {name: 'accent_color', label: 'Accent Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex color for the quote mark'},
    ]},
  ],
};
