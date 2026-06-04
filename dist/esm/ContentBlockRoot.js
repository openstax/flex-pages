import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { resolveContentBlocks } from './resolveContentBlocks.js';
export * from './ContentBlockContext.js';
export function ContentBlockRoot({ data, blocks, activeConditions }) {
    return _jsx(_Fragment, { children: resolveContentBlocks(data, blocks, activeConditions) });
}
