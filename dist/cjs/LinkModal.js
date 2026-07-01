"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const EditorFields_1 = require("@openstax/flex-page-editor/EditorFields");
const fetch_1 = require("@openstax/ts-utils/fetch");
const ui_components_1 = require("@openstax/ui-components");
/*
 * The custom link editor. Hosts a link-text field plus the editor's
 * `link-target` field in an isolated sub-form, so the link is configured with
 * the same UI as structured link fields — including whatever the app registers
 * for `link-target` (e.g. the page picker). On submit it hands back the text +
 * LinkTarget for the caller to apply to the Quill selection.
 */
const LinkModal = ({ Forms, initialText, initial, onConfirm, onRemove, onCancel }) => {
    // The modal is portaled but stays a React descendant of the page editor's
    // form, so a submit here bubbles (through React's tree) to the page form and
    // triggers its save. Stop the submit at the modal boundary.
    return (0, jsx_runtime_1.jsx)(ui_components_1.Modal, { show: true, heading: "Edit Link", onModalClose: onCancel, children: (0, jsx_runtime_1.jsx)("div", { onSubmit: (event) => event.stopPropagation(), children: (0, jsx_runtime_1.jsxs)(Forms.Form, { state: (0, fetch_1.fetchSuccess)({ text: initialText, target: initial !== null && initial !== void 0 ? initial : {} }), onSubmit: (data) => { var _a; return onConfirm({ text: (_a = data.text) !== null && _a !== void 0 ? _a : '', target: data.target }); }, children: [(0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { name: "text", label: "Link Text", type: "text", required: true }), (0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { name: "target", label: "Link Target", type: "link-target" }), (0, jsx_runtime_1.jsx)(Forms.Buttons, {}), initial ? (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: onRemove, children: "Remove link" }) : null] }) }) });
};
exports.LinkModal = LinkModal;
