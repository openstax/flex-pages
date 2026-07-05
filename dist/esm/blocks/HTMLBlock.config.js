export const config = {
    type: 'html',
    categories: ['structure', 'content'],
    label: 'HTML',
    description: 'Raw HTML embedded directly in the page, primarily for embeds like videos. Avoid using it as an escape hatch for unsupported designs — reach out to the developers instead.',
    field: { name: 'html', label: 'HTML', help: 'Raw html to be embedded in the page', type: 'long-text', required: true },
};
