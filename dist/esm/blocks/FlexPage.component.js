'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import React from 'react';
import './FlexPage.css';
import { findByType } from '../utils';
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
export function FlexPage({ data, content }) {
    var _a, _b, _c;
    const height = (_a = findByType(data.value.config, 'height')) === null || _a === void 0 ? void 0 : _a.value;
    const width = (_c = (_b = findByType(data.value.config, 'width')) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 'fixed';
    const ref = React.useRef(null);
    /*
     * the parent styles need to be different for flex-shrink
     * and flex-grow to both work correctly, and we don't want
     * to be modifying those, so we do the resize in JS. this
     * has the advantage of being able to have a site footer
     * that gets pushed down by the page content (like rex)
     */
    useIsomorphicLayoutEffect(() => {
        const doResize = () => {
            const element = ref.current;
            if (!element)
                return;
            const rect = element.getBoundingClientRect();
            const top = rect.top + window.scrollY;
            const availableHeight = (document.documentElement.clientHeight - top) + 'px';
            if (height === 'fill-to-screen') {
                element.style.minHeight = availableHeight;
            }
            if (height === 'contain-to-screen') {
                element.style.maxHeight = availableHeight;
            }
            if (height === 'fit-to-screen') {
                element.style.height = availableHeight;
            }
        };
        doResize();
        window.addEventListener('resize', doResize);
        return () => window.removeEventListener('resize', doResize);
    }, [height]);
    return _jsx("div", { ref: ref, className: cn('flex-page', 'page', 'flex-structure-container', `width-${width}`), children: content });
}
