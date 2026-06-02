"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsBlock = ColumnsBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const utils_1 = require("../utils");
require("./ColumnsBlock.css");
const STACK_AT_DEFAULT = '60em';
// cspell:ignore cqmin cqmax -- CSS container query length units
const STACK_AT_PATTERN = /^\d+(\.\d+)?(px|em|rem|%|vw|vh|cqw|cqi|cqmin|cqmax|ch|ex)$/;
// eslint-disable-next-line complexity
function ColumnsBlock({ data, leftContent, rightContent }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    const id = (_a = (0, utils_1.findByType)(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
    const gap = (_c = (_b = (0, utils_1.findByType)(data.value.config, 'gap')) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 0;
    const flex = (_d = (0, utils_1.findByType)(data.value.config, 'flex')) === null || _d === void 0 ? void 0 : _d.value;
    const leftSize = (_e = (0, utils_1.findByType)(data.value.config, 'left_size')) === null || _e === void 0 ? void 0 : _e.value;
    const rightSize = leftSize ? undefined : (_f = (0, utils_1.findByType)(data.value.config, 'right_size')) === null || _f === void 0 ? void 0 : _f.value;
    const backgroundColor = (_g = (0, utils_1.findByType)(data.value.config, 'background_color')) === null || _g === void 0 ? void 0 : _g.value;
    const gradientColor = (_h = (0, utils_1.findByType)(data.value.config, 'gradient_color')) === null || _h === void 0 ? void 0 : _h.value;
    const gradientDirection = (_j = (0, utils_1.findByType)(data.value.config, 'gradient_direction')) === null || _j === void 0 ? void 0 : _j.value;
    const padding = (_l = (_k = (0, utils_1.findByType)(data.value.config, 'padding')) === null || _k === void 0 ? void 0 : _k.value) !== null && _l !== void 0 ? _l : 0;
    const paddingTop = (_m = (0, utils_1.findByType)(data.value.config, 'padding_top')) === null || _m === void 0 ? void 0 : _m.value;
    const paddingBottom = (_o = (0, utils_1.findByType)(data.value.config, 'padding_bottom')) === null || _o === void 0 ? void 0 : _o.value;
    const analytics = (_p = (0, utils_1.findByType)(data.value.config, 'analytics_label')) === null || _p === void 0 ? void 0 : _p.value;
    const stackAtRaw = (_q = (0, utils_1.findByType)(data.value.config, 'stack_at')) === null || _q === void 0 ? void 0 : _q.value;
    const stackAt = stackAtRaw && STACK_AT_PATTERN.test(stackAtRaw.trim()) ? stackAtRaw.trim() : STACK_AT_DEFAULT;
    const bg = (0, utils_1.resolveBackground)(backgroundColor, gradientColor, gradientDirection);
    const scope = react_1.default.useId();
    const leftDisplay = data.value.leftContent.some(d => (0, utils_1.findByType)(d.value.config, 'flex'))
        ? 'flex' : 'block';
    const rightDisplay = data.value.rightContent.some(d => (0, utils_1.findByType)(d.value.config, 'flex'))
        ? 'flex' : 'block';
    const leftStyle = {
        display: leftDisplay,
        flexDirection: 'column',
        ...(leftSize ? { '--col-width': leftSize } : { '--col-flex': 1 }),
    };
    const rightStyle = {
        display: rightDisplay,
        flexDirection: 'column',
        ...(rightSize ? { '--col-width': rightSize } : { '--col-flex': 1 }),
    };
    const sel = `.flex-structure-container > section.content-block-columns[data-cols="${scope}"]`;
    const stackCSS = `@container flex-structure (max-width: ${stackAt}) {
    ${sel} { flex-shrink: 0; display: block }
    ${sel}.content-block-flex > div.columns-content,
    ${sel}.content-block-flex-shrink > div.columns-content { overflow-y: auto; height: unset; max-height: unset }
    ${sel} > div.columns-content { display: block; overflow: auto }
    ${sel} > div.columns-content .content-block-columns-left { margin-right: unset }
    ${sel} > div.columns-content .content-block-columns-left,
    ${sel} > div.columns-content .content-block-columns-right { flex: unset; max-width: unset }
  }`;
    return (0, jsx_runtime_1.jsxs)("section", { id: id, "data-cols": scope, className: (0, classnames_1.default)('content-block-columns', { 'dark-background': bg.isDark, [`content-block-${flex}`]: flex }), "data-analytics-nav": analytics, style: { background: bg.background, backgroundColor: bg.backgroundColor,
            '--col-gap': gap,
            '--padding-multiplier': padding,
            '--padding-top-multiplier': paddingTop,
            '--padding-bottom-multiplier': paddingBottom
        }, children: [(0, jsx_runtime_1.jsx)("style", { dangerouslySetInnerHTML: { __html: stackCSS } }), (0, jsx_runtime_1.jsxs)("div", { className: "columns-content", children: [(0, jsx_runtime_1.jsx)("div", { className: "content-block-columns-left", style: leftStyle, children: leftContent }), (0, jsx_runtime_1.jsx)("div", { className: "content-block-columns-right", style: rightStyle, children: rightContent })] })] });
}
