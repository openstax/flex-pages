"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DividerBlock = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const Image_1 = require("../components/Image");
const utils_1 = require("../utils");
require("./DividerBlock.css");
DividerBlock.blockConfig = {
    type: 'divider',
    categories: ['structure'],
    label: 'Divider',
    fields: [
        { name: 'image', label: 'Image', type: 'namespace', fields: Image_1.imageFieldsConfig },
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
function getTransform(config) {
    var _a, _b, _c, _d;
    const offsetVertical = (_b = (_a = (0, utils_1.findByType)(config, 'offset_vertical')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '-50%';
    const offsetHorizontal = (_d = (_c = (0, utils_1.findByType)(config, 'offset_horizontal')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '0px';
    return `translateY(${offsetVertical}) translateX(${offsetHorizontal})`;
}
function DividerBlock({ data }) {
    var _a, _b, _c;
    const width = (_a = (0, utils_1.findByType)(data.value.config, 'width')) === null || _a === void 0 ? void 0 : _a.value;
    const height = (_b = (0, utils_1.findByType)(data.value.config, 'height')) === null || _b === void 0 ? void 0 : _b.value;
    const alignment = (_c = (0, utils_1.findByType)(data.value.config, 'alignment')) === null || _c === void 0 ? void 0 : _c.value;
    const alignmentClass = alignment ? `align_${alignment}` : null;
    const transform = getTransform(data.value.config);
    return (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('content-block-divider', alignmentClass), children: (0, jsx_runtime_1.jsx)(Image_1.Image, { style: { width, height, transform }, className: "divider-image", image: data.value.image, alt: "" }) });
}
exports.DividerBlock = DividerBlock;
