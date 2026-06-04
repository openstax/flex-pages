import Color from 'color';
export function resolveBackground(backgroundColor, gradientColor, gradientDirection) {
    if (!backgroundColor)
        return { isDark: false };
    if (gradientColor) {
        const direction = gradientDirection || 'to bottom';
        const background = `linear-gradient(${direction}, ${backgroundColor}, ${gradientColor})`;
        const mixed = Color(backgroundColor).mix(Color(gradientColor), 0.5); // eslint-disable-line new-cap
        return { background, backgroundColor, isDark: mixed.isDark() };
    }
    return { backgroundColor, isDark: Color(backgroundColor).isDark() }; // eslint-disable-line new-cap
}
export function findByType(entries, type) {
    return entries === null || entries === void 0 ? void 0 : entries.find((entry) => entry.type === type);
}
// Marks an element as the text-alignment context for its descendants. Flex-based
// blocks (e.g. CTA actions) read this class to align themselves to match, since a
// flex row stretched to the full width can't be positioned by text-align alone.
// Goes on the same element that carries the text-align style so the nearest one
// wins for nested contexts.
export function flexAlignClass(textAlign) {
    return textAlign ? `flex-align-${textAlign}` : undefined;
}
export function scrollTo(el, offset = 0) {
    const getOffsetTop = () => {
        const rect = el.getBoundingClientRect();
        return rect.top - offset;
    };
    window.scrollBy({
        top: getOffsetTop(),
        behavior: 'smooth'
    });
}
