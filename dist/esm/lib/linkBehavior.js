import { scrollTo } from '../utils';
export function isClickWithModifierKeys(e) {
    return Boolean(e.shiftKey || e.ctrlKey || e.metaKey || e.altKey);
}
/*
 * Reads a dynamic-link descriptor from an anchor's data attributes, as written
 * by the editor into rich-text HTML:
 *   <a data-flex-link data-link-type=".." data-link-value=".." data-link-params="{..}">
 */
export function readLinkTarget(el) {
    const type = el.getAttribute('data-link-type');
    const value = el.getAttribute('data-link-value');
    if (!type || value === null)
        return null;
    const paramsRaw = el.getAttribute('data-link-params');
    let params;
    if (paramsRaw) {
        try {
            params = JSON.parse(paramsRaw);
        }
        catch {
            params = undefined;
        }
    }
    return { type, value, params };
}
// Link target types whose `value` is itself a usable href.
const URL_LINK_TYPES = ['external', 'internal', 'anchor'];
/*
 * Inverse of readLinkTarget: writes a (possibly resolved) target back onto an
 * anchor's data attributes. Used by mapPageNodes when transforming rich-text
 * links in the app data layer, and by the editor's flexLink blot.
 *
 * Keeps a concrete `href` on the anchor so it stays a valid link eagerly (in
 * the editor, raw HTML, etc.). A caller that has resolved the target to a url
 * — e.g. a route link's resolved page url — passes it as `href`; otherwise we
 * mirror the value for url-typed targets. We never clear an existing href, so
 * switching a link's type without supplying its new href won't silently drop
 * it (the caller is expected to pass the updated href).
 */
export function writeLinkTarget(el, target, href) {
    el.setAttribute('data-link-type', target.type);
    el.setAttribute('data-link-value', target.value);
    if (target.params && Object.keys(target.params).length > 0) {
        el.setAttribute('data-link-params', JSON.stringify(target.params));
    }
    else {
        el.removeAttribute('data-link-params');
    }
    const resolvedHref = href !== null && href !== void 0 ? href : (URL_LINK_TYPES.includes(target.type) ? target.value : undefined);
    if (resolvedHref !== undefined)
        el.setAttribute('href', resolvedHref);
}
/*
 * `anchorEl` is the actual link element — for the standalone Link it is
 * e.currentTarget; for the delegated rich-text handler it is the matched
 * ancestor (e.currentTarget would be the wrapper, not the link).
 */
export function handleLinkClick(e, anchorEl, target, { routes, actions }) {
    var _a, _b;
    const { type, value, params } = target;
    if (type === 'anchor') {
        e.preventDefault();
        const el = document.getElementById(value.substring(1));
        if (el)
            scrollTo(el);
        return;
    }
    if (type === 'route') {
        const route = routes[value];
        if (!route)
            return;
        if (isClickWithModifierKeys(e) || (anchorEl === null || anchorEl === void 0 ? void 0 : anchorEl.getAttribute('target')) === '_blank')
            return;
        e.preventDefault();
        route.handler(params);
        return;
    }
    if (type === 'action') {
        (_b = (_a = actions[value]) === null || _a === void 0 ? void 0 : _a.handler) === null || _b === void 0 ? void 0 : _b.call(_a, params);
    }
}
