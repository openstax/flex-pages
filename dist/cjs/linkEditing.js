"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionLinkEdit = selectionLinkEdit;
exports.anchorLinkEdit = anchorLinkEdit;
exports.attachLinkClick = attachLinkClick;
exports.applyLink = applyLink;
exports.removeLink = removeLink;
const linkBehavior_1 = require("@openstax/flex-page-renderer/lib/linkBehavior");
const quill_1 = __importDefault(require("quill"));
const flexLink_1 = require("./flexLink");
// Toolbar link button: edit the link covering the current selection.
function selectionLinkEdit(quill) {
    var _a, _b;
    const range = quill.getSelection();
    if (!range)
        return null;
    const initial = (_b = (_a = quill.getFormat(range)[flexLink_1.FlexLink.blotName]) === null || _a === void 0 ? void 0 : _a.target) !== null && _b !== void 0 ? _b : null;
    return { index: range.index, length: range.length, text: quill.getText(range.index, range.length), initial };
}
// Link click: edit the whole anchor. A bare `<a href>` (no flex data) opens as
// an external link with its href as the value.
function anchorLinkEdit(quill, anchor) {
    var _a, _b, _c;
    const blot = quill_1.default.find(anchor);
    const index = blot ? quill.getIndex(blot) : 0;
    const length = blot ? blot.length() : 0;
    const initial = (_a = (0, linkBehavior_1.readLinkTarget)(anchor)) !== null && _a !== void 0 ? _a : { type: 'external', value: (_b = anchor.getAttribute('href')) !== null && _b !== void 0 ? _b : '' };
    return { index, length, text: (_c = anchor.textContent) !== null && _c !== void 0 ? _c : '', initial };
}
// Open the editor whenever a link is clicked — replaces the native link
// tooltip. Returns a cleanup to detach the listener.
function attachLinkClick(quill, open) {
    const onClick = (event) => {
        var _a, _b;
        const anchor = (_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest) === null || _b === void 0 ? void 0 : _b.call(_a, 'a');
        if (!anchor)
            return;
        event.preventDefault();
        open(anchor);
    };
    quill.root.addEventListener('click', onClick);
    return () => quill.root.removeEventListener('click', onClick);
}
// `href` is the target resolved to a concrete url by the caller (e.g. a route
// link via RouteContext); url-typed targets can omit it (writeLinkTarget mirrors
// the value).
function applyLink(quill, edit, { text, target }, href) {
    const { index, length } = edit;
    const value = { target, href };
    // Unchanged text over a real selection: just (re)apply the format, preserving
    // any sub-formatting (bold, etc.) within the link text.
    if (length > 0 && text === edit.text) {
        quill.formatText(index, length, flexLink_1.FlexLink.blotName, value, 'user');
        return;
    }
    // Otherwise replace the range with the (new) link text.
    if (length > 0)
        quill.deleteText(index, length, 'user');
    quill.insertText(index, text || target.value || 'link', flexLink_1.FlexLink.blotName, value, 'user');
}
function removeLink(quill, edit) {
    if (edit.length > 0)
        quill.formatText(edit.index, edit.length, flexLink_1.FlexLink.blotName, false, 'user');
}
