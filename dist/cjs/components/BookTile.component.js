"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTile = BookTile;
const jsx_runtime_1 = require("react/jsx-runtime");
const Image_1 = require("@openstax/flex-page-renderer/components/Image");
const Link_1 = require("@openstax/flex-page-renderer/components/Link");
const BookMenu_component_js_1 = require("./BookMenu.component.js");
// A single book tile: cover + optional badge + title (one clickable link), and
// either the per-book dropdown menu or a disabled CTA when the book has no menu
// (e.g. a coming-soon book the proxy emits with an empty menu).
function BookTile({ config, book, defaultButtonText }) {
    var _a, _b, _c, _d;
    const title = (_a = book === null || book === void 0 ? void 0 : book.title) !== null && _a !== void 0 ? _a : '';
    const items = ((_b = config.menu) !== null && _b !== void 0 ? _b : []).flatMap((section) => section.items);
    const buttonText = (_c = config.button_text) !== null && _c !== void 0 ? _c : defaultButtonText;
    const head = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("span", { className: 'book-tile-cover-wrap', children: [book && (0, jsx_runtime_1.jsx)("img", { className: 'book-tile-cover', src: book.coverUrl, role: 'presentation', alt: '', width: 400, height: 400 }), config.badge && (0, jsx_runtime_1.jsx)(Image_1.Image, { className: 'book-tile-badge', image: config.badge, alt: (_d = config.badge_alt) !== null && _d !== void 0 ? _d : '' })] }), (0, jsx_runtime_1.jsx)("span", { className: 'book-tile-title', children: title })] });
    return (0, jsx_runtime_1.jsxs)("div", { className: 'book-tile', children: [config.title_link
                ? (0, jsx_runtime_1.jsx)(Link_1.LinkComponent, { className: 'book-tile-head', linkTarget: config.title_link, ariaLabel: title ? `${title} book` : undefined, children: head })
                : (0, jsx_runtime_1.jsx)("div", { className: 'book-tile-head', children: head }), (0, jsx_runtime_1.jsx)("div", { className: 'book-tile-foot', children: (0, jsx_runtime_1.jsx)(BookMenu_component_js_1.BookMenu, { buttonText: buttonText, items: items, disabled: items.length === 0 }) })] });
}
