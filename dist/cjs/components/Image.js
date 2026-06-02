"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = Image;
const jsx_runtime_1 = require("react/jsx-runtime");
function Image({ image, ...props }) {
    return (0, jsx_runtime_1.jsx)("img", { ...props, src: image.file, width: image.width, height: image.height });
}
