'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import React from 'react';
import { findByType, resolveBackground } from '../utils.js';
import './TabbedContentBlock.css';
export function TabbedContentBlock({ data, tabs: resolvedTabs }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const tabs = resolvedTabs !== null && resolvedTabs !== void 0 ? resolvedTabs : data.value.tabs;
    const id = (_a = findByType(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
    const alignment = (_b = findByType(data.value.config, 'tab_alignment')) === null || _b === void 0 ? void 0 : _b.value;
    const activeColor = (_c = findByType(data.value.config, 'active_color')) === null || _c === void 0 ? void 0 : _c.value;
    const backgroundColor = (_d = findByType(data.value.config, 'background_color')) === null || _d === void 0 ? void 0 : _d.value;
    const gradientColor = (_e = findByType(data.value.config, 'gradient_color')) === null || _e === void 0 ? void 0 : _e.value;
    const gradientDirection = (_f = findByType(data.value.config, 'gradient_direction')) === null || _f === void 0 ? void 0 : _f.value;
    const analytics = (_g = findByType(data.value.config, 'analytics_label')) === null || _g === void 0 ? void 0 : _g.value;
    const borderWidth = (_h = findByType(data.value.config, 'border_width')) === null || _h === void 0 ? void 0 : _h.value;
    const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);
    const defaultTabRaw = (_j = findByType(data.value.config, 'default_tab')) === null || _j === void 0 ? void 0 : _j.value;
    const defaultTab = defaultTabRaw
        ? Math.max(0, Math.min(Number(defaultTabRaw), tabs.length - 1))
        : 0;
    const [activeIndex, setActiveIndex] = React.useState(defaultTab);
    const tabRefs = React.useRef([]);
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
    return _jsxs("div", { id: id, className: cn('content-block-tabbed-content', alignment && `tab-align-${alignment}`, borderWidth === 'full' && 'border-full-width', { 'dark-background': bg.isDark }), "data-analytics-nav": analytics, style: {
            background: bg.background, backgroundColor: bg.backgroundColor,
            ...(activeColor ? { '--tab-active-color': activeColor } : {}),
        }, children: [_jsx("div", { className: "tab-list-container", children: _jsx("div", { className: "tab-list", role: "tablist", onKeyDown: handleKeyDown, children: tabs.map((tab, i) => _jsx("button", { ref: (el) => { tabRefs.current[i] = el; }, role: "tab", id: `${baseId}-tab-${i}`, "aria-selected": i === activeIndex, "aria-controls": `${baseId}-panel-${i}`, tabIndex: i === activeIndex ? 0 : -1, className: cn('tab-button', { active: i === activeIndex }), "data-label": tab.label, onClick: () => setActiveIndex(i), children: tab.label }, i)) }) }), _jsx("div", { className: "tab-panels", children: tabs.map((tab, i) => _jsx("div", { role: "tabpanel", id: `${baseId}-panel-${i}`, "aria-labelledby": `${baseId}-tab-${i}`, "aria-hidden": i !== activeIndex, tabIndex: i === activeIndex ? 0 : -1, className: cn('tab-panel', 'flex-structure-container', { active: i === activeIndex }), children: tab.content }, i)) })] });
}
