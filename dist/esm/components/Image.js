import { jsx as _jsx } from "react/jsx-runtime";
export const imageFieldsConfig = [
    { name: 'file', label: 'File Path', help: 'URL to the image file.', type: 'text' },
    { name: 'height', label: 'Height', help: 'The raw pixel height of the image.', type: 'number' },
    { name: 'width', label: 'Width', help: 'The raw pixel width of the image.', type: 'number' },
];
export function Image({ image, ...props }) {
    return _jsx("img", { ...props, src: image.file, width: image.width, height: image.height });
}
