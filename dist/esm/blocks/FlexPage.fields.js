export const fields = {
    type: 'flex_page',
    categories: ['page'],
    label: 'Page',
    fields: [
        { name: 'content', label: 'Page Content', type: 'blocks', categories: ['structure'] },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'width', label: 'Width', type: 'select', options: [
                        { label: 'Fixed', value: 'fixed' },
                        { label: 'Full Width', value: 'full' },
                    ] },
                { name: 'height', label: 'Height', type: 'select', options: [
                        /*
                         * may want to add additional options here that allow to reserve space on screen for following content
                         */
                        { label: 'Expand to fill screen (short content expands to screen, longer content scrolls page normally)', value: 'fill-to-screen' },
                        { label: 'Shrink to contain to screen (short content appears normally, longer content shrinks to fit page)', value: 'contain-to-screen' },
                        { label: 'Expand & Shrink (bottom of content always aligns to screen edge)', value: 'fit-to-screen' },
                    ] },
            ] },
    ],
};
