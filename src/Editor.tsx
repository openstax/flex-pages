import React from 'react';
import type * as UI from '@openstax/ui-components';
import { BlockContext, ActionContext, ActionConfig, BlockComponents } from '@openstax/flex-page-renderer/ContentBlockRoot';
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
export const FlexBlockEditor = ({name, label, blocks, actions, fields, type, Forms}: {
  name: string;
  label?: string;
  type?: string;
  blocks: BlockComponents<any>;
  actions?: ActionConfig;
  fields?: Record<string, React.ComponentType<any>>;
  categories?: string[];
  Forms?: typeof UI.Forms.Controlled;
}) => {
  const editorType = type ?? 'flex_page';
  const { block: Block } = React.useContext(EditorFieldTypeContext);

  const inner = <BlockContext.Provider value={blocks}>
    <ActionContext.Provider value={actions ?? {}}>
      <ExtendEditorTypes fields={fields ?? {}}>
        <Block label={label} name={name} types={[editorType]} />
      </ExtendEditorTypes>
    </ActionContext.Provider>
  </BlockContext.Provider>

  if (Forms) {
    return <FormsContext.Provider value={Forms}>
      {inner}
    </FormsContext.Provider>;
  }

  return inner;
};
