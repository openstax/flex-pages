export function findByType(entries, type) {
    return entries === null || entries === void 0 ? void 0 : entries.find((entry) => entry.type === type);
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
