import { jsx as _jsx } from "react/jsx-runtime";
import { ContentBlocks } from './ContentBlocks';
import { ActionContext } from './ActionContext';
import { BlockContext } from './ContentBlockContext';
export * from './ContentBlockContext';
export * from './ActionContext';
export const ContentBlockRootHoc = (ContentComponent) => ({ data, actions, blocks }) => {
    return _jsx(BlockContext.Provider, { value: blocks, children: _jsx(ActionContext.Provider, { value: actions !== null && actions !== void 0 ? actions : {}, children: _jsx(ContentComponent, { data: data }) }) });
};
export const ContentBlockRoot = ContentBlockRootHoc(ContentBlocks);
