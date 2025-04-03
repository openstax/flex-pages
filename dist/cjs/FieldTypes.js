"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = exports.configs = exports.blocks = exports.block = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const EditorFields_1 = require("./EditorFields");
const react_1 = __importDefault(require("react"));
const CollapsibleFieldset_1 = require("./CollapsibleFieldset");
const ContentBlockRoot_1 = require("@openstax/flex-page-renderer/ContentBlockRoot");
const UI = __importStar(require("@openstax/ui-components"));
const DisplayBlockForm = ({ children, label }) => {
    var _a;
    const formState = UI.Forms.Controlled.useFormHelpers();
    const data = formState.data;
    const config = (_a = react_1.default.useContext(ContentBlockRoot_1.BlockContext)[data.type]) === null || _a === void 0 ? void 0 : _a.blockConfig;
    if (!config)
        return (0, jsx_runtime_1.jsx)("pre", { children: JSON.stringify(data, null, 2) });
    return config.field
        ? (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { ...config.field, label: label !== null && label !== void 0 ? label : config.label, name: "value" }), children] })
        : (0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { label: label !== null && label !== void 0 ? label : config.label, children: children, name: "value", type: "namespace", fields: config.fields || [] });
};
const AddBlock = ({ categories }) => {
    const listHelpers = UI.Forms.Controlled.useFormListHelpers();
    const blocks = Object.entries(react_1.default.useContext(ContentBlockRoot_1.BlockContext))
        .filter(([, definition]) => definition.blockConfig.categories.find(s => categories.includes(s)));
    return (0, jsx_runtime_1.jsxs)("div", { children: ["add a:", (0, jsx_runtime_1.jsx)("ul", { children: blocks.map(([key, { blockConfig }]) => (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: () => listHelpers.addRecord({ type: key }), children: blockConfig.label }) }, key)) })] });
};
// copied from ui-components/src/components/forms/controlled/hooks.ts
const randomId = () => window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
const block = ({ name, label, types, categories }) => {
    const formState = UI.Forms.Controlled.useFormHelpers();
    const value = formState.data[name];
    const setValue = formState.setInput.field(name);
    const blocks = Object.entries(react_1.default.useContext(ContentBlockRoot_1.BlockContext)).filter(([, definition]) => (!categories || definition.blockConfig.categories.find(s => categories.includes(s)))
        && (!types || types.includes(definition.blockConfig.type)));
    if (value) {
        return (0, jsx_runtime_1.jsx)(UI.Forms.Controlled.NameSpace, { name: name, children: (0, jsx_runtime_1.jsx)(DisplayBlockForm, { label: label }) });
    }
    if (blocks.length === 1) {
        return (0, jsx_runtime_1.jsxs)("button", { type: "button", onClick: () => setValue({ type: blocks[0][1].blockConfig.type, id: randomId() }), children: ["Add ", blocks[0][1].blockConfig.label] });
    }
    return (0, jsx_runtime_1.jsxs)("div", { children: ["add a:", (0, jsx_runtime_1.jsx)("ul", { children: blocks.map(([key, { blockConfig }]) => (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: () => setValue({ type: key, id: randomId() }), children: blockConfig.label }) }, key)) })] });
};
exports.block = block;
const blocks = ({ name, label, categories }) => {
    const inner = (0, jsx_runtime_1.jsxs)(UI.Forms.Controlled.List, { name: name, children: [(0, jsx_runtime_1.jsx)(UI.Forms.Controlled.ListItems, { children: (0, jsx_runtime_1.jsx)(DisplayBlockForm, { children: (0, jsx_runtime_1.jsx)(UI.Forms.Controlled.ListRecordRemoveButton, { children: "remove block" }) }) }), (0, jsx_runtime_1.jsx)(AddBlock, { categories: categories })] });
    return label ? (0, jsx_runtime_1.jsx)(CollapsibleFieldset_1.CollapsibleFieldset, { legend: label, children: inner }) : inner;
};
exports.blocks = blocks;
const DisplayConfigForm = ({ configs }) => {
    const formState = UI.Forms.Controlled.useFormHelpers();
    const data = formState.data;
    const config = configs.find(c => c.name === data.type);
    if (!config)
        return (0, jsx_runtime_1.jsx)("pre", { children: JSON.stringify(data, null, 2) });
    return (0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { ...config, name: "value" });
};
const AddConfig = ({ name, configs }) => {
    const formState = UI.Forms.Controlled.useFormHelpers();
    const addedConfigs = formState.data[name] || [];
    const listHelpers = UI.Forms.Controlled.useFormListHelpers();
    const availableConfigs = configs.filter(c => !addedConfigs.find((s) => s.type === c.name));
    if (availableConfigs.length < 1)
        return null;
    return (0, jsx_runtime_1.jsx)("ul", { children: availableConfigs.map(c => (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: () => listHelpers.addRecord({ type: c.name }), children: c.label }) }, c.name)) });
};
const configs = ({ name, label, configs }) => {
    return (0, jsx_runtime_1.jsx)(CollapsibleFieldset_1.CollapsibleFieldset, { legend: label, children: (0, jsx_runtime_1.jsxs)(UI.Forms.Controlled.List, { name: name, children: [(0, jsx_runtime_1.jsxs)(UI.Forms.Controlled.ListItems, { children: [(0, jsx_runtime_1.jsx)(DisplayConfigForm, { configs: configs }), (0, jsx_runtime_1.jsx)(UI.Forms.Controlled.ListRecordRemoveButton, { children: "remove config" })] }), (0, jsx_runtime_1.jsx)(AddConfig, { name: name, configs: configs })] }) });
};
exports.configs = configs;
const AddListItem = ({ name, max }) => {
    const formState = UI.Forms.Controlled.useFormHelpers();
    const items = formState.data[name] || [];
    const listHelpers = UI.Forms.Controlled.useFormListHelpers();
    if (max && items.length > max)
        return null;
    return (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: () => listHelpers.addRecord(), children: "add item" });
};
const list = ({ name, label, max, fields }) => {
    return (0, jsx_runtime_1.jsx)(CollapsibleFieldset_1.CollapsibleFieldset, { legend: label, children: (0, jsx_runtime_1.jsxs)(UI.Forms.Controlled.List, { name: name, children: [(0, jsx_runtime_1.jsxs)(UI.Forms.Controlled.ListItems, { children: [(0, jsx_runtime_1.jsx)(EditorFields_1.EditorFields, { fields: fields }), (0, jsx_runtime_1.jsx)(UI.Forms.Controlled.ListRecordRemoveButton, { children: "remove item" })] }), (0, jsx_runtime_1.jsx)(AddListItem, { name: name, max: max })] }) });
};
exports.list = list;
