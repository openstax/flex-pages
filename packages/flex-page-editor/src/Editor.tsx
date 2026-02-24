import type { BlockComponents } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { ActionContext, RouteContext } from '@openstax/flex-page-renderer/FlexPageContextProvider';
import type { ActionConfig, RouteConfig } from '@openstax/flex-page-renderer/FlexPageContextProvider';
import type * as UI from '@openstax/ui-components';
import React from 'react';
import { BlockContext } from './BlockContext';
import { EditorFieldTypeContext, ExtendEditorTypes } from './EditorFields';
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
export const FlexBlockEditor = ({name, label, blocks, actions, routes, fields, type, Forms}: {
  name: string;
  label?: string;
  type?: string;
  blocks: BlockComponents<any>;
  actions?: ActionConfig;
  routes?: RouteConfig;
  fields?: Record<string, React.ComponentType<any>>;
  categories?: string[];
  Forms?: typeof UI.Forms.Controlled;
}) => {
  const editorType = type ?? 'flex_page';
  const { block: Block } = React.useContext(EditorFieldTypeContext);

  const inner = <BlockContext.Provider value={blocks}>
    <ActionContext.Provider value={actions ?? {}}>
      <RouteContext.Provider value={routes ?? {}}>
        <ExtendEditorTypes fields={fields ?? {}}>
          <Block label={label} name={name} types={[editorType]} />
        </ExtendEditorTypes>
      </RouteContext.Provider>
    </ActionContext.Provider>
  </BlockContext.Provider>;

  if (Forms) {
    return <FormsContext.Provider value={Forms}>
      {inner}
    </FormsContext.Provider>;
  }

  return inner;
};
