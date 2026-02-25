import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
function isBlockArray(value, blocks) {
    if (!Array.isArray(value) || value.length === 0)
        return false;
    const first = value[0];
    return first
        && typeof first === 'object'
        && 'type' in first
        && 'id' in first
        && typeof first.type === 'string'
        && first.type in blocks;
}
function resolveSlotProps(block, blocks) {
    const slotProps = {};
    const value = block.value;
    for (const [key, val] of Object.entries(value)) {
        if (key === 'config')
            continue;
        if (isBlockArray(val, blocks)) {
            slotProps[key] = resolveContentBlocks(val, blocks);
            continue;
        }
        if (Array.isArray(val) && val.length > 0 && typeof val[0] === 'object' && val[0] !== null) {
            const firstItem = val[0];
            const hasNestedBlocks = Object.entries(firstItem)
                .some(([k, v]) => k !== 'config' && isBlockArray(v, blocks));
            if (hasNestedBlocks) {
                slotProps[key] = val.map((item) => {
                    const resolved = { ...item };
                    for (const [itemKey, itemVal] of Object.entries(item)) {
                        if (itemKey !== 'config' && isBlockArray(itemVal, blocks)) {
                            resolved[itemKey] = resolveContentBlocks(itemVal, blocks);
                        }
                    }
                    return resolved;
                });
            }
        }
    }
    return slotProps;
}
function resolveContentBlock(block, blocks) {
    const Block = blocks[block.type];
    if (!Block)
        return _jsx("pre", { children: JSON.stringify(block, null, 2) }, block.id);
    const slotProps = resolveSlotProps(block, blocks);
    const Comp = Block;
    return _jsx(Comp, { data: block, ...slotProps }, block.id);
}
export function resolveContentBlocks(data, blocks) {
    return _jsx(_Fragment, { children: data.map((block) => resolveContentBlock(block, blocks)) });
}
