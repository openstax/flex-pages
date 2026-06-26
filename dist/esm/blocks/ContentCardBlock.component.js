'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Image } from '@openstax/flex-page-renderer/components/Image';
import { fetchContent as defaultFetchContent } from '../lib/fetchContent.js';
import { useContent } from '../lib/useContent.js';
import './ContentCardBlock.css';
// Factory binding a content-data source for the client fetch path (mirrors
// createBookTileList). The default-wired Component is what the barrel exports.
export function createContentCard(fetchContent) {
    return function ContentCard({ data }) {
        var _a;
        const { reference, title, image, excerpt } = data.value;
        const hydrated = useContent({ id: reference.id, type: reference.type }, fetchContent, data.prefetched);
        const displayTitle = (_a = title !== null && title !== void 0 ? title : hydrated === null || hydrated === void 0 ? void 0 : hydrated.title) !== null && _a !== void 0 ? _a : reference.title;
        const displayExcerpt = excerpt !== null && excerpt !== void 0 ? excerpt : hydrated === null || hydrated === void 0 ? void 0 : hydrated.excerpt;
        const hydratedImage = hydrated === null || hydrated === void 0 ? void 0 : hydrated.image;
        return _jsxs("a", { className: 'content-card', href: reference.url, children: [_jsx("span", { className: 'content-card-image', children: image
                        ? _jsx(Image, { image: image, alt: '' })
                        : hydratedImage && _jsx("img", { src: hydratedImage, alt: '', role: 'presentation' }) }), _jsx("span", { className: 'content-card-title', children: displayTitle }), displayExcerpt && _jsx("span", { className: 'content-card-excerpt', children: displayExcerpt })] });
    };
}
export const Component = createContentCard(defaultFetchContent);
