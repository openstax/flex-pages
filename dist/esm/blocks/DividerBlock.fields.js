export const fields = {
    type: 'divider',
    categories: ['structure'],
    label: 'Divider',
    fields: [
        { name: 'image', label: 'Image', type: 'image' },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'width', label: 'Image Display Width', help: 'CSS text for the width to display the image', type: 'text' },
                { name: 'height', label: 'Image Display Height', help: 'CSS text for the height to display the image', type: 'text' },
                { name: 'alignment', label: 'Image Alignment', type: 'select', options: [
                        { label: 'Left side of Content', value: 'content_left' },
                        { label: 'Right side of Content', value: 'content_right' },
                        { label: 'Left side of Page', value: 'body_left' },
                        { label: 'Right side of Page', value: 'body_right' },
                        { label: 'Center', value: 'center' },
                    ] },
                { name: 'offset_vertical', label: 'Offset Vertical', help: 'CSS text for vertical offset eg `-50%` to center the image vertically', type: 'text' },
                { name: 'offset_horizontal', label: 'Offset Horizontal', help: 'CSS text for horizontal offset eg `-50%` to center the image horizontally', type: 'text' },
            ] },
    ],
};
