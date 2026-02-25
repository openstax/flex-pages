import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { BlockContext } from './BlockContext';
import { CollapsibleFieldset } from './CollapsibleFieldset';
import { EditorField, EditorFields } from './EditorFields';
import { useForms } from './FormsContext';
const DisplayBlockForm = ({ children, label }) => {
    var _a;
    const formState = useForms().useFormHelpers();
    const data = formState.data;
    const config = (_a = React.useContext(BlockContext)[data.type]) === null || _a === void 0 ? void 0 : _a.blockConfig;
    if (!config)
        return _jsx("pre", { children: JSON.stringify(data, null, 2) });
    return config.field
        ? _jsxs(_Fragment, { children: [_jsx(EditorField, { ...config.field, label: label !== null && label !== void 0 ? label : config.label, name: "value" }), children] })
        : _jsx(EditorField, { label: label !== null && label !== void 0 ? label : config.label, children: children, name: "value", type: "namespace", fields: config.fields || [] });
};
const AddBlock = ({ categories }) => {
    const listHelpers = useForms().useFormListHelpers();
    const blocks = Object.entries(React.useContext(BlockContext))
        .filter(([, definition]) => definition.blockConfig.categories.find(s => categories.includes(s)));
    return _jsxs("div", { children: ["add a:", _jsx("ul", { children: blocks.map(([key, { blockConfig }]) => _jsx("li", { children: _jsx("button", { type: "button", onClick: () => listHelpers.addRecord({ type: key }), children: blockConfig.label }) }, key)) })] });
};
// copied from ui-components/src/components/forms/controlled/hooks.ts
const randomId = () => window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
export const block = ({ name, label, types, categories }) => {
    const Forms = useForms();
    const formState = Forms.useFormHelpers();
    const value = formState.data[name];
    const setValue = formState.setInput.field(name);
    const blocks = Object.entries(React.useContext(BlockContext)).filter(([, definition]) => (!categories || definition.blockConfig.categories.find(s => categories.includes(s)))
        && (!types || types.includes(definition.blockConfig.type)));
    if (value) {
        return _jsx(Forms.NameSpace, { name: name, children: _jsx(DisplayBlockForm, { label: label }) });
    }
    if (blocks.length === 1) {
        return _jsxs("button", { type: "button", onClick: () => setValue({ type: blocks[0][1].blockConfig.type, id: randomId() }), children: ["Add ", blocks[0][1].blockConfig.label] });
    }
    return _jsxs("div", { children: ["add a:", _jsx("ul", { children: blocks.map(([key, { blockConfig }]) => _jsx("li", { children: _jsx("button", { type: "button", onClick: () => setValue({ type: key, id: randomId() }), children: blockConfig.label }) }, key)) })] });
};
const ListItemControls = () => {
    const Forms = useForms();
    const formState = Forms.useFormHelpers();
    const listHelpers = Forms.useFormListHelpers();
    const index = listHelpers.data.indexOf(formState.data);
    const moveUp = React.useCallback(() => {
        const newList = [...listHelpers.data];
        newList.splice(index - 1, 0, newList.splice(index, 1)[0]);
        listHelpers.setData(newList);
    }, [index, listHelpers.data, listHelpers.setData]);
    const moveDown = React.useCallback(() => {
        const newList = [...listHelpers.data];
        newList.splice(index + 1, 0, newList.splice(index, 1)[0]);
        listHelpers.setData(newList);
    }, [index, listHelpers.data, listHelpers.setData]);
    return _jsxs("div", { children: [_jsx("button", { onClick: moveUp, disabled: index < 1, type: "button", children: "move up" }), _jsx("button", { onClick: moveDown, disabled: index >= listHelpers.data.length - 1, type: "button", children: "move down" })] });
};
export const blocks = ({ name, label, categories }) => {
    const Forms = useForms();
    const inner = _jsxs(Forms.List, { name: name, children: [_jsx(Forms.ListItems, { children: _jsxs(DisplayBlockForm, { children: [_jsx(Forms.ListRecordRemoveButton, { children: "remove block" }), _jsx(ListItemControls, {})] }) }), _jsx(AddBlock, { categories: categories })] });
    return label ? _jsx(CollapsibleFieldset, { legend: label, children: inner }) : inner;
};
const DisplayConfigForm = ({ configs }) => {
    const formState = useForms().useFormHelpers();
    const data = formState.data;
    const config = configs.find(c => c.name === data.type);
    if (!config)
        return _jsx("pre", { children: JSON.stringify(data, null, 2) });
    return _jsx(EditorField, { ...config, name: "value" });
};
const AddConfig = ({ name, configs }) => {
    const Forms = useForms();
    const formState = Forms.useFormHelpers();
    const listHelpers = Forms.useFormListHelpers();
    const addedConfigs = formState.data[name] || [];
    const availableConfigs = configs.filter(c => !addedConfigs.find((s) => s.type === c.name));
    if (availableConfigs.length < 1)
        return null;
    return _jsx("ul", { children: availableConfigs.map(c => _jsx("li", { children: _jsx("button", { type: "button", onClick: () => listHelpers.addRecord({ type: c.name }), children: c.label }) }, c.name)) });
};
export const configs = ({ name, label, configs }) => {
    const Forms = useForms();
    return _jsx(CollapsibleFieldset, { legend: label, children: _jsxs(Forms.List, { name: name, children: [_jsxs(Forms.ListItems, { children: [_jsx(DisplayConfigForm, { configs: configs }), _jsx(Forms.ListRecordRemoveButton, { children: "remove config" })] }), _jsx(AddConfig, { name: name, configs: configs })] }) });
};
const AddListItem = ({ name, max }) => {
    const Forms = useForms();
    const formState = Forms.useFormHelpers();
    const listHelpers = Forms.useFormListHelpers();
    const items = formState.data[name] || [];
    if (max && items.length > max)
        return null;
    return _jsx("button", { type: "button", onClick: () => listHelpers.addRecord(), children: "add item" });
};
export const list = ({ name, label, max, fields }) => {
    const Forms = useForms();
    return _jsx(CollapsibleFieldset, { legend: label, children: _jsxs(Forms.List, { name: name, children: [_jsxs(Forms.ListItems, { children: [_jsx(EditorFields, { fields: fields }), _jsx(Forms.ListRecordRemoveButton, { children: "remove item" })] }), _jsx(AddListItem, { name: name, max: max })] }) });
};
