import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import { Image } from '../components/Image.js';
import { findByType } from '../utils.js';
import './DividerBlock.css';
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
