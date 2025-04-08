"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
require("./FlexPage.css");
const utils_1 = require("../utils");
const classnames_1 = __importDefault(require("classnames"));
const ContentBlocks_1 = require("../ContentBlocks");
;
FlexPage.blockConfig = {
    type: 'flex_page',
    categories: ['page'],
    label: 'Page',
    fields: [
        { name: 'content', label: 'Page Content', type: 'blocks', categories: ['structure'] },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'width', label: 'Width', type: 'select', options: [
                        { label: 'Fixed', value: 'fixed' },
                        { label: 'Full Width', value: 'full' },
                    ] },
                { name: 'height', label: 'Height', type: 'select', options: [
                        /*
                         * may want to add additional options here that allow to reserve space on screen for following content
                         */
                        { label: 'Expand to fill screen (short content expands to screen, longer content scrolls page normally)', value: 'fill-to-screen' },
                        { label: 'Shrink to contain to screen (short content appears normally, longer content shrinks to fit page)', value: 'contain-to-screen' },
                        { label: 'Expand & Shrink (bottom of content always aligns to screen edge)', value: 'fit-to-screen' },
                    ] },
            ] },
    ],
};
function FlexPage({ data }) {
    var _a, _b, _c;
    const height = (_a = (0, utils_1.findByType)(data.value.config, 'height')) === null || _a === void 0 ? void 0 : _a.value;
    const width = (_c = (_b = (0, utils_1.findByType)(data.value.config, 'width')) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 'fixed';
    const ref = react_1.default.useRef(null);
    /*
     * the parent styles need to be different for flex-shrink
     * and flex-grow to both work correctly, and we don't want
     * to be modifying those, so we do the resize in JS. this
     * has the advantage of being able to have a site footer
     * that gets pushed down by the page content (like rex)
     */
    react_1.default.useLayoutEffect(() => {
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
    return (0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, classnames_1.default)('flex-page', 'page', `width-${width}`), children: (0, jsx_runtime_1.jsx)(ContentBlocks_1.ContentBlocks, { data: data.value.content }) });
}
exports.FlexPage = FlexPage;
;
