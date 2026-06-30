'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Image } from '@openstax/flex-page-renderer/components/Image';
import { LinkComponent } from '@openstax/flex-page-renderer/components/Link';
import { BookMenu } from './BookMenu.component.js';
// A single book tile: cover + optional badge + title (one clickable link), and
// either the per-book dropdown menu or a disabled CTA when the book has no menu
// (e.g. a coming-soon book the proxy emits with an empty menu).
export function BookTile({ config, book, defaultButtonText }) {
    var _a, _b, _c, _d;
    const title = (_a = book === null || book === void 0 ? void 0 : book.title) !== null && _a !== void 0 ? _a : '';
    const items = ((_b = config.menu) !== null && _b !== void 0 ? _b : []).flatMap((section) => section.items);
    const buttonText = (_c = config.button_text) !== null && _c !== void 0 ? _c : defaultButtonText;
    const head = _jsxs(_Fragment, { children: [_jsxs("span", { className: 'book-tile-cover-wrap', children: [book && _jsx("img", { className: 'book-tile-cover', src: book.coverUrl, role: 'presentation', alt: '', width: 400, height: 400 }), config.badge && _jsx(Image, { className: 'book-tile-badge', image: config.badge, alt: (_d = config.badge_alt) !== null && _d !== void 0 ? _d : '' })] }), _jsx("span", { className: 'book-tile-title', children: title })] });
    return _jsxs("div", { className: 'book-tile', children: [config.title_link
                ? _jsx(LinkComponent, { className: 'book-tile-head', linkTarget: config.title_link, ariaLabel: title ? `${title} book` : undefined, children: head })
                : _jsx("div", { className: 'book-tile-head', children: head }), _jsx("div", { className: 'book-tile-foot', children: _jsx(BookMenu, { buttonText: buttonText, items: items, disabled: items.length === 0 }) })] });
}
