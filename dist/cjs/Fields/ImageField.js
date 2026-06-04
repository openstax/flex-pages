"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const CollapsibleFieldset_1 = require("../CollapsibleFieldset");
const EditorFields_1 = require("../EditorFields");
const FormsContext_1 = require("../FormsContext");
// Default `image` configurator: the same file/height/width inputs the namespace
// field used to render, now nested under the field name via Forms.NameSpace.
// Hardcoded (rather than driven by a fields config) so an app can swap in a
// richer asset-management UI by overriding the `image` field type, exactly the
// way the link-target configurator is replaced. Editing only file/height/width
// leaves any adjacent data (e.g. an asset `id`) on the value untouched.
const ImageFieldInputs = () => (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { name: "file", label: "File Path", help: "URL to the image file.", type: "text" }), (0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { name: "height", label: "Height", help: "The raw pixel height of the image.", type: "number" }), (0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { name: "width", label: "Width", help: "The raw pixel width of the image.", type: "number" })] });
const ImageField = ({ name, label }) => {
    const Forms = (0, FormsContext_1.useForms)();
    return (0, jsx_runtime_1.jsx)(Forms.NameSpace, { name: name, children: (0, jsx_runtime_1.jsx)(CollapsibleFieldset_1.CollapsibleFieldset, { legend: label, children: (0, jsx_runtime_1.jsx)(ImageFieldInputs, {}) }) });
};
exports.ImageField = ImageField;
