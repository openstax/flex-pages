import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import * as UI from '@openstax/ui-components';
import { BlockContext, ActionContext } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { ExtendEditorTypes, EditorFieldTypeContext } from './EditorFields';
/*
 * there is some kind of bug (in webpack?) where ui-components is being bundled
 * multiple times, and if that happens it becomes necessary to pass the FormContext
 * through here or the FormStateContext variable will not be shared
 *
 * possibly related to:
 * - https://github.com/webpack/webpack/issues/8886
 * - https://github.com/webpack/webpack/issues/985
 *
 * if the issue is related to symlinks, its possible that it would work correctly
 * sometimes, but i haven't seen it work yet after trying several configurations.
 */
export const FlexBlockEditor = ({ name, label, blocks, actions, fields, type, FormContext }) => {
    const editorType = type !== null && type !== void 0 ? type : 'flex_page';
    const { block: Block } = React.useContext(EditorFieldTypeContext);
    const inner = _jsx(BlockContext.Provider, { value: blocks, children: _jsx(ActionContext.Provider, { value: actions !== null && actions !== void 0 ? actions : {}, children: _jsx(ExtendEditorTypes, { fields: fields !== null && fields !== void 0 ? fields : {}, children: _jsx(Block, { label: label, name: name, types: [editorType] }) }) }) });
    if (FormContext && FormContext !== UI.Forms.Controlled.FormStateContext) {
        return _jsx(FormContext.Consumer, { children: value => _jsx(UI.Forms.Controlled.FormStateContext.Provider, { value: value, children: inner }) });
    }
    return inner;
};
