"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabbedContentBlock = TabbedContentBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const utils_1 = require("../utils");
require("./TabbedContentBlock.css");
TabbedContentBlock.blockConfig = {
    type: 'tabbed_content',
    label: 'Tabbed Content',
    categories: ['structure'],
    fields: [
        { name: 'tabs', label: 'Tabs', type: 'list', fields: [
                { name: 'label', label: 'Tab Label', type: 'text', required: true },
                { name: 'content', label: 'Tab Content', type: 'blocks', categories: ['structure'] },
            ] },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'tab_alignment', label: 'Tab Alignment', type: 'select', options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                    ] },
                { name: 'active_color', label: 'Active Tab Color', type: 'text', pattern: '#[a-fA-F0-9]{6}',
                    help: 'Hex color for the active tab underline' },
                { name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}' },
                { name: 'gradient_color', label: 'Gradient To Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}',
                    help: 'Second color for gradient effect. Background Color is the starting color.' },
                { name: 'gradient_direction', label: 'Gradient Direction', type: 'select', options: [
                        { label: 'Top to Bottom', value: 'to bottom' },
                        { label: 'Bottom to Top', value: 'to top' },
                        { label: 'Left to Right', value: 'to right' },
                        { label: 'Right to Left', value: 'to left' },
                        { label: 'Top-Left to Bottom-Right', value: 'to bottom right' },
                        { label: 'Top-Right to Bottom-Left', value: 'to bottom left' },
                        { label: 'Bottom-Left to Top-Right', value: 'to top right' },
                        { label: 'Bottom-Right to Top-Left', value: 'to top left' },
                    ] },
                { name: 'default_tab', label: 'Default Tab', type: 'number',
                    help: 'Zero-based index of the tab to show by default' },
                { name: 'analytics_label', label: 'Analytics Label',
                    help: 'Analytics events from within this block will include this label', type: 'text' },
                { name: 'id', label: 'ID',
                    help: 'The HTML id of the tabbed content block (can be referenced by anchor links).', type: 'text' },
            ] },
    ],
};
function TabbedContentBlock({ data, tabs: resolvedTabs }) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const tabs = resolvedTabs !== null && resolvedTabs !== void 0 ? resolvedTabs : data.value.tabs;
    const id = (_a = (0, utils_1.findByType)(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
    const alignment = (_b = (0, utils_1.findByType)(data.value.config, 'tab_alignment')) === null || _b === void 0 ? void 0 : _b.value;
    const activeColor = (_c = (0, utils_1.findByType)(data.value.config, 'active_color')) === null || _c === void 0 ? void 0 : _c.value;
    const backgroundColor = (_d = (0, utils_1.findByType)(data.value.config, 'background_color')) === null || _d === void 0 ? void 0 : _d.value;
    const gradientColor = (_e = (0, utils_1.findByType)(data.value.config, 'gradient_color')) === null || _e === void 0 ? void 0 : _e.value;
    const gradientDirection = (_f = (0, utils_1.findByType)(data.value.config, 'gradient_direction')) === null || _f === void 0 ? void 0 : _f.value;
    const analytics = (_g = (0, utils_1.findByType)(data.value.config, 'analytics_label')) === null || _g === void 0 ? void 0 : _g.value;
    const bg = (0, utils_1.resolveBackground)(backgroundColor, gradientColor, gradientDirection);
    const defaultTabRaw = (_h = (0, utils_1.findByType)(data.value.config, 'default_tab')) === null || _h === void 0 ? void 0 : _h.value;
    const defaultTab = defaultTabRaw
        ? Math.max(0, Math.min(Number(defaultTabRaw), tabs.length - 1))
        : 0;
    const [activeIndex, setActiveIndex] = react_1.default.useState(defaultTab);
    const tabRefs = react_1.default.useRef([]);
    const baseId = `tabbed-${data.id}`;
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
    return (0, jsx_runtime_1.jsxs)("div", { id: id, className: (0, classnames_1.default)('content-block-tabbed-content', alignment && `tab-align-${alignment}`, { 'dark-background': bg.isDark }), "data-analytics-nav": analytics, style: {
            background: bg.background, backgroundColor: bg.backgroundColor,
            ...(activeColor ? { '--tab-active-color': activeColor } : {}),
        }, children: [(0, jsx_runtime_1.jsx)("div", { className: "tab-list-container", children: (0, jsx_runtime_1.jsx)("div", { className: "tab-list", role: "tablist", onKeyDown: handleKeyDown, children: tabs.map((tab, i) => (0, jsx_runtime_1.jsx)("button", { ref: (el) => { tabRefs.current[i] = el; }, role: "tab", id: `${baseId}-tab-${i}`, "aria-selected": i === activeIndex, "aria-controls": `${baseId}-panel-${i}`, tabIndex: i === activeIndex ? 0 : -1, className: (0, classnames_1.default)('tab-button', { active: i === activeIndex }), "data-label": tab.label, onClick: () => setActiveIndex(i), children: tab.label }, i)) }) }), (0, jsx_runtime_1.jsx)("div", { className: "tab-panels", children: tabs.map((tab, i) => (0, jsx_runtime_1.jsx)("div", { role: "tabpanel", id: `${baseId}-panel-${i}`, "aria-labelledby": `${baseId}-tab-${i}`, "aria-hidden": i !== activeIndex, tabIndex: i === activeIndex ? 0 : -1, className: (0, classnames_1.default)('tab-panel', 'flex-structure-container', { active: i === activeIndex }), children: tab.content }, i)) })] });
}
