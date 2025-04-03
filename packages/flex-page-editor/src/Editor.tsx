import React from 'react';
import * as UI from '@openstax/ui-components';
import { BlockContext, BlockComponents } from '@openstax/flex-page-renderer/ContentBlockRoot';
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
export const FlexBlockEditor = ({name, label, blocks, fields, type, FormContext}: {
  name: string;
  label?: string;
  type?: string;
  blocks: BlockComponents<any>;
  fields?: Record<string, React.ComponentType<any>>;
  categories?: string[];
  FormContext?: typeof UI.Forms.Controlled.FormStateContext;
}) => {
  const editorType = type ?? 'flex_page';
  const { block: Block } = React.useContext(EditorFieldTypeContext);

  const inner = <BlockContext.Provider value={blocks}>
    <ExtendEditorTypes fields={fields ?? {}}>
      <Block label={label} name={name} types={[editorType]} />
    </ExtendEditorTypes>
  </BlockContext.Provider>

  if (FormContext && FormContext !== UI.Forms.Controlled.FormStateContext) {
    return <FormContext.Consumer>{value => <UI.Forms.Controlled.FormStateContext.Provider value={value}>
      {inner}
    </UI.Forms.Controlled.FormStateContext.Provider>}</FormContext.Consumer>;
  }

  return inner;
};
