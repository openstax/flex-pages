import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { CollapsibleFieldset } from '../CollapsibleFieldset';
import { EditorField } from '../EditorFields';
import { useForms } from '../FormsContext';
// Default `image` configurator: the same file/height/width inputs the namespace
// field used to render, now nested under the field name via Forms.NameSpace.
// Hardcoded (rather than driven by a fields config) so an app can swap in a
// richer asset-management UI by overriding the `image` field type, exactly the
// way the link-target configurator is replaced. Editing only file/height/width
// leaves any adjacent data (e.g. an asset `id`) on the value untouched.
const ImageFieldInputs = () => _jsxs(_Fragment, { children: [_jsx(EditorField, { name: "file", label: "File Path", help: "URL to the image file.", type: "text" }), _jsx(EditorField, { name: "height", label: "Height", help: "The raw pixel height of the image.", type: "number" }), _jsx(EditorField, { name: "width", label: "Width", help: "The raw pixel width of the image.", type: "number" })] });
export const ImageField = ({ name, label }) => {
    const Forms = useForms();
    return _jsx(Forms.NameSpace, { name: name, children: _jsx(CollapsibleFieldset, { legend: label, children: _jsx(ImageFieldInputs, {}) }) });
};
