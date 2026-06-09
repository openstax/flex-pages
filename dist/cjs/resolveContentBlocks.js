"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveContentBlocks = resolveContentBlocks;
const jsx_runtime_1 = require("react/jsx-runtime");
const blockFields_js_1 = require("./lib/blockFields.js");
function resolveSlotProps(block, blocks, activeConditions) {
    const slotProps = {};
    const value = block.value;
    for (const field of (0, blockFields_js_1.fieldDefs)(blocks[block.type])) {
        const fieldValue = value[field.name];
        // a 'blocks' field is a nested block array -> resolve to React nodes
        if (field.type === 'blocks' && Array.isArray(fieldValue)) {
            slotProps[field.name] = resolveContentBlocks(fieldValue, blocks, activeConditions);
            continue;
        }
        // a 'list' field whose items carry 'blocks' sub-fields (e.g. tabbed content)
        if (field.type === 'list' && Array.isArray(field.fields) && Array.isArray(fieldValue)) {
            const blockSubFields = field.fields.filter((sub) => sub.type === 'blocks');
            if (blockSubFields.length === 0)
                continue;
            slotProps[field.name] = fieldValue.map((item) => {
                const resolved = { ...item };
                for (const sub of blockSubFields) {
                    if (Array.isArray(item[sub.name])) {
                        resolved[sub.name] = resolveContentBlocks(item[sub.name], blocks, activeConditions);
                    }
                }
                return resolved;
            });
        }
    }
    return slotProps;
}
function resolveContentBlock(block, blocks, activeConditions) {
    const def = blocks[block.type];
    if (!def)
        return (0, jsx_runtime_1.jsx)("pre", { children: JSON.stringify(block, null, 2) }, block.id);
    const slotProps = resolveSlotProps(block, blocks, activeConditions);
    const Comp = def.Component;
    return (0, jsx_runtime_1.jsx)(Comp, { data: block, activeConditions: activeConditions, ...slotProps }, block.id);
}
function resolveContentBlocks(data, blocks, activeConditions) {
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: data.map((block) => resolveContentBlock(block, blocks, activeConditions)) });
}
