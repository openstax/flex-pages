import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { BlockContext, ActionContext, RouteContext, } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { ExtendEditorTypes, EditorFieldTypeContext } from './EditorFields';
import { FormsContext } from './FormsContext';
/*
 * there is some kind of bug (in webpack?) where ui-components is being bundled
 * multiple times, and if that happens it becomes necessary to pass the Forms library
 * through here or the Context variables will not be shared
 *
 * possibly related to:
 * - https://github.com/webpack/webpack/issues/8886
 * - https://github.com/webpack/webpack/issues/985
 *
 * if the issue is related to symlinks, its possible that it would work correctly
 * sometimes, but i haven't seen it work yet after trying several configurations.
 */
export const FlexBlockEditor = ({ name, label, blocks, actions, routes, fields, type, Forms }) => {
    const editorType = type !== null && type !== void 0 ? type : 'flex_page';
    const { block: Block } = React.useContext(EditorFieldTypeContext);
    const inner = _jsx(BlockContext.Provider, { value: blocks, children: _jsx(ActionContext.Provider, { value: actions !== null && actions !== void 0 ? actions : {}, children: _jsx(RouteContext.Provider, { value: routes !== null && routes !== void 0 ? routes : {}, children: _jsx(ExtendEditorTypes, { fields: fields !== null && fields !== void 0 ? fields : {}, children: _jsx(Block, { label: label, name: name, types: [editorType] }) }) }) }) });
    if (Forms) {
        return _jsx(FormsContext.Provider, { value: Forms, children: inner });
    }
    return inner;
};
