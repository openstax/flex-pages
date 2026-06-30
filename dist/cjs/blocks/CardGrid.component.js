"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardGrid = CardGrid;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const color_1 = __importDefault(require("color"));
const react_1 = __importDefault(require("react"));
const CardGrid_config_js_1 = require("./CardGrid.config.js");
require("./CardGrid.css");
// A config value counts as "set" when present and non-empty, so an explicit 0
// (a falsy but meaningful value, e.g. border_size: 0 = no border) wins over the
// SCSS fallback rather than being treated as absent.
const present = (v) => v != null && v !== '';
function CardGrid({ config, children }) {
    const c = (0, CardGrid_config_js_1.parseCardGridConfig)(config, (color) => (0, color_1.default)(color).isDark()); // eslint-disable-line new-cap
    const items = react_1.default.Children.toArray(children);
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('content-block-cards', c.styleClass, present(c.cardSize) && 'has-size', c.cardColumns && 'has-columns', present(c.cardMinSize) && 'has-min-size', present(c.accentSize) && 'has-accent-size', c.accentColors && 'has-custom-accent', c.dividerColors && 'has-custom-divider', c.isDarkBg && 'dark-card-background'), style: {
            '--card-size': c.cardSize,
            '--card-columns': c.cardColumns,
            '--card-min-size': c.cardMinSize,
            // Value-bearing vars only when present, so an explicit 0 wins over the
            // SCSS fallback.
            ...(present(c.backgroundColor) ? { '--card-bg-color': c.backgroundColor } : {}),
            ...(present(c.borderSize) ? { '--card-border-size': `${c.borderSize}px` } : {}),
            ...(present(c.accentSize) ? { '--card-accent-size': `${c.accentSize}px` } : {}),
            ...(present(c.padding) ? { '--card-padding': c.padding } : {}),
            ...(present(c.paddingTop) ? { '--card-padding-top': c.paddingTop } : {}),
            ...(present(c.paddingBottom) ? { '--card-padding-bottom': c.paddingBottom } : {}),
        }, children: items.map((child, i) => {
            var _a, _b;
            const accent = ((_a = c.accentColors) === null || _a === void 0 ? void 0 : _a.length) ? c.accentColors[i % c.accentColors.length] : undefined;
            const divider = ((_b = c.dividerColors) === null || _b === void 0 ? void 0 : _b.length) ? c.dividerColors[i % c.dividerColors.length] : undefined;
            const style = (accent || divider) ? {
                ...(accent ? { '--card-accent': accent } : {}),
                ...(divider ? { '--card-divider': divider } : {}),
            } : undefined;
            const key = react_1.default.isValidElement(child) && child.key != null ? child.key : i;
            return (0, jsx_runtime_1.jsx)("div", { className: "content-block-card", style: style, children: child }, key);
        }) }));
}
