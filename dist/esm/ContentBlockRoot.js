import { jsx as _jsx } from "react/jsx-runtime";
import { ContentBlocks } from './ContentBlocks';
import { ActionContext } from './ActionContext';
import { RouteContext } from './RouteContext';
import { BlockContext } from './ContentBlockContext';
export * from './ContentBlockContext';
export * from './ActionContext';
export * from './RouteContext';
export const ContentBlockRootHoc = (ContentComponent) => ({ data, actions, routes, blocks }) => {
    return _jsx(BlockContext.Provider, { value: blocks, children: _jsx(ActionContext.Provider, { value: actions !== null && actions !== void 0 ? actions : {}, children: _jsx(RouteContext.Provider, { value: routes !== null && routes !== void 0 ? routes : {}, children: _jsx(ContentComponent, { data: data }) }) }) });
};
export const ContentBlockRoot = ContentBlockRootHoc(ContentBlocks);
