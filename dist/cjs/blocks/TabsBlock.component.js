"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsBlock = TabsBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const utils_js_1 = require("../utils.js");
require("./TabsBlock.css");
function TabsBlock({ data, tabs: resolvedTabs }) {
    var _a, _b, _c, _d, _e, _f;
    const tabs = resolvedTabs !== null && resolvedTabs !== void 0 ? resolvedTabs : data.value.tabs;
    const id = (_a = (0, utils_js_1.findByType)(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
    const flex = (_b = (0, utils_js_1.findByType)(data.value.config, 'flex')) === null || _b === void 0 ? void 0 : _b.value;
    const alignment = (_c = (0, utils_js_1.findByType)(data.value.config, 'tab_alignment')) === null || _c === void 0 ? void 0 : _c.value;
    const activeColor = (_d = (0, utils_js_1.findByType)(data.value.config, 'active_color')) === null || _d === void 0 ? void 0 : _d.value;
    const analytics = (_e = (0, utils_js_1.findByType)(data.value.config, 'analytics_label')) === null || _e === void 0 ? void 0 : _e.value;
    const defaultTabRaw = (_f = (0, utils_js_1.findByType)(data.value.config, 'default_tab')) === null || _f === void 0 ? void 0 : _f.value;
    const defaultTab = defaultTabRaw
        ? Math.max(0, Math.min(Number(defaultTabRaw), tabs.length - 1))
        : 0;
    const [activeIndex, setActiveIndex] = react_1.default.useState(defaultTab);
    const tabRefs = react_1.default.useRef([]);
    const baseId = `tabs-${data.id}`;
    if (!tabs.length)
        return null;
    const handleKeyDown = (e) => {
        var _a;
        let nextIndex;
        switch (e.key) {
            case 'ArrowRight':
                nextIndex = (activeIndex + 1) % tabs.length;
                break;
            case 'ArrowLeft':
                nextIndex = (activeIndex - 1 + tabs.length) % tabs.length;
                break;
            case 'Home':
                nextIndex = 0;
                break;
            case 'End':
                nextIndex = tabs.length - 1;
                break;
            default:
                return;
        }
        e.preventDefault();
        setActiveIndex(nextIndex);
        (_a = tabRefs.current[nextIndex]) === null || _a === void 0 ? void 0 : _a.focus();
    };
    return (0, jsx_runtime_1.jsxs)("div", { id: id, className: (0, classnames_1.default)('content-block-tabs', { [`content-block-${flex}`]: flex }, alignment && `tab-align-${alignment}`), "data-analytics-nav": analytics, style: activeColor ? { '--tab-active-color': activeColor } : undefined, children: [(0, jsx_runtime_1.jsx)("div", { className: "tab-list", role: "tablist", onKeyDown: handleKeyDown, children: tabs.map((tab, i) => (0, jsx_runtime_1.jsx)("button", { ref: (el) => { tabRefs.current[i] = el; }, role: "tab", id: `${baseId}-tab-${i}`, "aria-selected": i === activeIndex, "aria-controls": `${baseId}-panel-${i}`, tabIndex: i === activeIndex ? 0 : -1, className: (0, classnames_1.default)('tab-button', { active: i === activeIndex }), "data-label": tab.label, onClick: () => setActiveIndex(i), children: tab.label }, i)) }), (0, jsx_runtime_1.jsx)("div", { className: "tab-panels", children: tabs.map((tab, i) => (0, jsx_runtime_1.jsx)("div", { role: "tabpanel", id: `${baseId}-panel-${i}`, "aria-labelledby": `${baseId}-tab-${i}`, "aria-hidden": i !== activeIndex, tabIndex: i === activeIndex ? 0 : -1, className: (0, classnames_1.default)('tab-panel', 'flex-content-container', { active: i === activeIndex }), children: tab.content }, i)) })] });
}
