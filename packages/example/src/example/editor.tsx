import React from 'react';
import * as UI from '@openstax/ui-components';
import { fetchSuccess } from '@openstax/ts-utils/fetch';
import { createRoute, makeScreen } from "../core/services";
import * as allBlocks from '@openstax/flex-page-renderer/blocks/index';
import { EditorFormFields } from '@openstax/flex-page-editor/Editor';

export const EditorScreen = () => {
  return <>
    <h1>Create Page</h1>
    <UI.Forms.Controlled.Form state={fetchSuccess({})}>
      <EditorFormFields blocks={allBlocks} name="blocks" />
    </UI.Forms.Controlled.Form>
  </>;
};

const pathPrefix = process.env.NODE_ENV === 'development' ?
  '/' : process.env.PUBLIC_URL;

export const editorScreen = createRoute({name: 'EditorScreen',
  path: pathPrefix + 'edit',
  handler: makeScreen(EditorScreen)
});
