'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import React from 'react';
import { findByType } from '../utils.js';
import { RichTextContent } from './RichTextBlock.component.js';
import './AccordionBlock.css';
// Derive a stable, URL- and DOM-safe id from an author-supplied id, falling
// back to the item index. The allowlist keeps only id-safe characters, so a
// value like "/assignable-isbn" becomes "assignable-isbn".
function toAnchorId(id, index) {
    const cleaned = (id !== null && id !== void 0 ? id : '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return cleaned || `item-${index}`;
}
export function AccordionBlock({ data }) {
    var _a, _b, _c, _d;
    const items = data.value.items;
    const headingLevel = (_b = (_a = findByType(data.value.config, 'heading_level')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '3';
    const allowMultiple = ((_c = findByType(data.value.config, 'allow_multiple')) === null || _c === void 0 ? void 0 : _c.value) === 'true';
    const accentColor = (_d = findByType(data.value.config, 'accent_color')) === null || _d === void 0 ? void 0 : _d.value;
    const baseId = `accordion-${data.id}`;
    const [open, setOpen] = React.useState(new Set());
    const buttonRefs = React.useRef([]);
    // Deep-link support: when the URL hash matches an item's id, open that
    // item and scroll it into view — both on load and when an in-page anchor
    // link changes the hash.
    React.useEffect(() => {
        const openFromHash = () => {
            const hash = decodeURIComponent(window.location.hash.slice(1));
            if (!hash)
                return;
            const index = items.findIndex((item, i) => toAnchorId(item.id, i) === hash);
            if (index < 0)
                return;
            setOpen((prev) => (allowMultiple ? new Set(prev).add(index) : new Set([index])));
            // Defer the scroll until the panel has expanded so the target lands in view.
            window.requestAnimationFrame(() => { var _a; return (_a = buttonRefs.current[index]) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: 'start' }); });
        };
        openFromHash();
        window.addEventListener('hashchange', openFromHash);
        return () => window.removeEventListener('hashchange', openFromHash);
    }, [items, allowMultiple]);
    if (!items.length)
        return null;
    const toggle = (i) => {
        setOpen((prev) => {
            const isOpen = prev.has(i);
            if (allowMultiple) {
                const next = new Set(prev);
                if (isOpen) {
                    next.delete(i);
                }
                else {
                    next.add(i);
                }
                return next;
            }
            // Single-open accordion: opening one closes the rest.
            return isOpen ? new Set() : new Set([i]);
        });
    };
    // Roving focus between item triggers, per the WAI-ARIA accordion pattern.
    const handleKeyDown = (e, i) => {
        var _a;
        let nextIndex;
        switch (e.key) {
            case 'ArrowDown':
                nextIndex = (i + 1) % items.length;
                break;
            case 'ArrowUp':
                nextIndex = (i - 1 + items.length) % items.length;
                break;
            case 'Home':
                nextIndex = 0;
                break;
            case 'End':
                nextIndex = items.length - 1;
                break;
            default:
                return;
        }
        e.preventDefault();
        (_a = buttonRefs.current[nextIndex]) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const Heading = `h${headingLevel}`;
    return _jsx("div", { className: "content-block-accordion", style: accentColor ? { '--accordion-accent-color': accentColor } : undefined, children: items.map((item, i) => {
            const anchorId = toAnchorId(item.id, i);
            const triggerId = `${baseId}-trigger-${anchorId}`;
            const panelId = `${baseId}-panel-${anchorId}`;
            const isOpen = open.has(i);
            return _jsxs("div", { className: cn('accordion-item', { open: isOpen }), children: [_jsx(Heading, { className: "accordion-header", id: anchorId, children: _jsxs("button", { ref: (el) => { buttonRefs.current[i] = el; }, type: "button", id: triggerId, className: "accordion-trigger", "aria-expanded": isOpen, "aria-controls": panelId, onClick: () => toggle(i), onKeyDown: (e) => handleKeyDown(e, i), children: [_jsx("span", { className: "accordion-header-text", children: item.header }), _jsx("svg", { className: "accordion-icon", viewBox: "0 0 16 16", width: "16", height: "16", "aria-hidden": "true", focusable: "false", children: _jsx("path", { d: "M4 6l4 4 4-4", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })] }) }), _jsx(RichTextContent, { id: panelId, className: "accordion-content", hidden: !isOpen, html: item.content })] }, i);
        }) });
}
