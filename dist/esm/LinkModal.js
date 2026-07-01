import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditorField } from '@openstax/flex-page-editor/EditorFields';
import { fetchSuccess } from '@openstax/ts-utils/fetch';
import { Modal } from '@openstax/ui-components';
/*
 * The custom link editor. Hosts a link-text field plus the editor's
 * `link-target` field in an isolated sub-form, so the link is configured with
 * the same UI as structured link fields — including whatever the app registers
 * for `link-target` (e.g. the page picker). On submit it hands back the text +
 * LinkTarget for the caller to apply to the Quill selection.
 */
export const LinkModal = ({ Forms, initialText, initial, onConfirm, onRemove, onCancel }) => {
    // The modal is portaled but stays a React descendant of the page editor's
    // form, so a submit here bubbles (through React's tree) to the page form and
    // triggers its save. Stop the submit at the modal boundary.
    return _jsx(Modal, { show: true, heading: "Edit Link", onModalClose: onCancel, children: _jsx("div", { onSubmit: (event) => event.stopPropagation(), children: _jsxs(Forms.Form, { state: fetchSuccess({ text: initialText, target: initial !== null && initial !== void 0 ? initial : {} }), onSubmit: (data) => { var _a; return onConfirm({ text: (_a = data.text) !== null && _a !== void 0 ? _a : '', target: data.target }); }, children: [_jsx(EditorField, { name: "text", label: "Link Text", type: "text", required: true }), _jsx(EditorField, { name: "target", label: "Link Target", type: "link-target" }), _jsx(Forms.Buttons, {}), initial ? _jsx("button", { type: "button", onClick: onRemove, children: "Remove link" }) : null] }) }) });
};
