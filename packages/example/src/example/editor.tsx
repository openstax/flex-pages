import React from 'react';
import * as UI from '@openstax/ui-components';
import { renderRouteUrl } from '../core';
import { fetchSuccess } from '@openstax/ts-utils/fetch';
import { createRoute, makeScreen } from "../core/services";
import * as allBlocks from '@openstax/flex-page-renderer/blocks/index';
import { EditorFormFields } from '@openstax/flex-page-editor/Editor';
import { useServices } from '../core/context/services';
import { homeScreen } from './screen';

export const EditorScreen = () => {
  const services = useServices();
  const onSubmit = React.useCallback((data: UI.Forms.Controlled.AbstractFormData) => {
    const page = JSON.stringify(data);

    services.history.push(renderRouteUrl(
      homeScreen, undefined, {page}
    ));
  }, [services.history]);

  return <>
    <h1>Create Page</h1>
    <UI.Forms.Controlled.Form state={fetchSuccess({})} onSubmit={onSubmit}>
      <EditorFormFields blocks={allBlocks} name="blocks" FormContext={UI.Forms.Controlled.FormStateContext} />
      <UI.Forms.Controlled.Buttons />
    </UI.Forms.Controlled.Form>
  </>;
};

export const editorScreen = createRoute({name: 'EditorScreen',
  path: '/edit',
  handler: makeScreen(EditorScreen)
});
