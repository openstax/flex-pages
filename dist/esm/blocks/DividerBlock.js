import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import { Image, imageFieldsConfig } from '../components/Image';
import { findByType } from '../utils';
import './DividerBlock.css';
DividerBlock.blockConfig = {
    type: 'divider',
    categories: ['structure'],
    label: 'Divider',
    fields: [
        { name: 'image', label: 'Image', type: 'namespace', fields: imageFieldsConfig },
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
    const offsetVertical = (_b = (_a = findByType(config, 'offset_vertical')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '-50%';
    const offsetHorizontal = (_d = (_c = findByType(config, 'offset_horizontal')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '0px';
    return `translateY(${offsetVertical}) translateX(${offsetHorizontal})`;
}
export function DividerBlock({ data }) {
    var _a, _b, _c;
    const width = (_a = findByType(data.value.config, 'width')) === null || _a === void 0 ? void 0 : _a.value;
    const height = (_b = findByType(data.value.config, 'height')) === null || _b === void 0 ? void 0 : _b.value;
    const alignment = (_c = findByType(data.value.config, 'alignment')) === null || _c === void 0 ? void 0 : _c.value;
    const alignmentClass = alignment ? `align_${alignment}` : null;
    const transform = getTransform(data.value.config);
    return _jsx("div", { className: cn('content-block-divider', alignmentClass), children: _jsx(Image, { style: { width, height, transform }, className: "divider-image", image: data.value.image, alt: "" }) });
}
