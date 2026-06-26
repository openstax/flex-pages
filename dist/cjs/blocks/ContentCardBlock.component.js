"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
exports.createContentCard = createContentCard;
const jsx_runtime_1 = require("react/jsx-runtime");
const Image_1 = require("@openstax/flex-page-renderer/components/Image");
const fetchContent_js_1 = require("../lib/fetchContent.js");
const useContent_js_1 = require("../lib/useContent.js");
require("./ContentCardBlock.css");
// Factory binding a content-data source for the client fetch path (mirrors
// createBookTileList). The default-wired Component is what the barrel exports.
function createContentCard(fetchContent) {
    return function ContentCard({ data }) {
        var _a;
        const { reference, title, image, excerpt } = data.value;
        const hydrated = (0, useContent_js_1.useContent)({ id: reference.id, type: reference.type }, fetchContent, data.prefetched);
        const displayTitle = (_a = title !== null && title !== void 0 ? title : hydrated === null || hydrated === void 0 ? void 0 : hydrated.title) !== null && _a !== void 0 ? _a : reference.title;
        const displayExcerpt = excerpt !== null && excerpt !== void 0 ? excerpt : hydrated === null || hydrated === void 0 ? void 0 : hydrated.excerpt;
        const hydratedImage = hydrated === null || hydrated === void 0 ? void 0 : hydrated.image;
        return (0, jsx_runtime_1.jsxs)("a", { className: 'content-card', href: reference.url, children: [(0, jsx_runtime_1.jsx)("span", { className: 'content-card-image', children: image
                        ? (0, jsx_runtime_1.jsx)(Image_1.Image, { image: image, alt: '' })
                        : hydratedImage && (0, jsx_runtime_1.jsx)("img", { src: hydratedImage, alt: '', role: 'presentation' }) }), (0, jsx_runtime_1.jsx)("span", { className: 'content-card-title', children: displayTitle }), displayExcerpt && (0, jsx_runtime_1.jsx)("span", { className: 'content-card-excerpt', children: displayExcerpt })] });
    };
}
exports.Component = createContentCard(fetchContent_js_1.fetchContent);
