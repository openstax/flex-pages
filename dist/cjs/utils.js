"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveBackground = resolveBackground;
exports.findByType = findByType;
exports.scrollTo = scrollTo;
const color_1 = __importDefault(require("color"));
function resolveBackground(backgroundColor, gradientColor, gradientDirection) {
    if (!backgroundColor)
        return { isDark: false };
    if (gradientColor) {
        const direction = gradientDirection || 'to bottom';
        const background = `linear-gradient(${direction}, ${backgroundColor}, ${gradientColor})`;
        const mixed = (0, color_1.default)(backgroundColor).mix((0, color_1.default)(gradientColor), 0.5); // eslint-disable-line new-cap
        return { background, backgroundColor, isDark: mixed.isDark() };
    }
    return { backgroundColor, isDark: (0, color_1.default)(backgroundColor).isDark() }; // eslint-disable-line new-cap
}
function findByType(entries, type) {
    return entries === null || entries === void 0 ? void 0 : entries.find((entry) => entry.type === type);
}
function scrollTo(el, offset = 0) {
    const getOffsetTop = () => {
        const rect = el.getBoundingClientRect();
        return rect.top - offset;
    };
    window.scrollBy({
        top: getOffsetTop(),
        behavior: 'smooth'
    });
}
