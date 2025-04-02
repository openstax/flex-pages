import React from 'react';
import * as UI from '@openstax/ui-components';
import { BlockContext, BlockComponents } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { EditorFieldTypeContext } from './EditorFields';

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
export const EditorFormFields = ({name, blocks, FormContext}: {
  name: string;
  blocks: BlockComponents<any>;
  FormContext?: typeof UI.Forms.Controlled.FormStateContext;
}) => {
  const { blocks: Blocks } = React.useContext(EditorFieldTypeContext);
  
  const inner = <BlockContext.Provider value={blocks}>
    <Blocks name={name} categories={['structure']} />
  </BlockContext.Provider>

  if (FormContext && FormContext !== UI.Forms.Controlled.FormStateContext) {
    return <FormContext.Consumer>{value => <UI.Forms.Controlled.FormStateContext.Provider value={value}>
      {inner}
    </UI.Forms.Controlled.FormStateContext.Provider>}</FormContext.Consumer>;
  }

  return inner;
};
