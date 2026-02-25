import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { resolveContentBlocks } from './resolveContentBlocks';
export * from './ContentBlockContext';
export function ContentBlockRoot({ data, blocks }) {
    return _jsx(_Fragment, { children: resolveContentBlocks(data, blocks) });
}
