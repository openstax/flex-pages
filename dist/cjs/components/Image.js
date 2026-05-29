"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageFieldsConfig = void 0;
exports.Image = Image;
const jsx_runtime_1 = require("react/jsx-runtime");
exports.imageFieldsConfig = [
    { name: 'file', label: 'File Path', help: 'URL to the image file.', type: 'text' },
    { name: 'height', label: 'Height', help: 'The raw pixel height of the image.', type: 'number' },
    { name: 'width', label: 'Width', help: 'The raw pixel width of the image.', type: 'number' },
];
function Image({ image, ...props }) {
    return (0, jsx_runtime_1.jsx)("img", { ...props, src: image.file, width: image.width, height: image.height });
}
