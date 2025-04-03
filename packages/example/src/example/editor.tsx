import React from 'react';
import * as UI from '@openstax/ui-components';
import { Layout } from '../components/Layout';
import { renderRouteUrl } from '../core';
import { fetchSuccess } from '@openstax/ts-utils/fetch';
import { createRoute, makeScreen } from "../core/services";
import * as allBlocks from '@openstax/flex-page-renderer/blocks/index';
import { FlexBlockEditor } from '@openstax/flex-page-editor/Editor';
import { useServices } from '../core/context/services';
import { homeScreen } from './screen';
import { quillExtensions } from '@openstax/flex-page-editor-quill-extension';
import { selectExtensions } from '@openstax/flex-page-editor-select-extension';
import { actions } from './actions';

const fieldTypes = {
  ...quillExtensions,
  ...selectExtensions,
};

export const EditorScreen = () => {
  const services = useServices();
  const onSubmit = React.useCallback((data: UI.Forms.Controlled.AbstractFormData) => {
    const page = JSON.stringify(data.page);

    window.open(services.history.createHref(renderRouteUrl(
      homeScreen, undefined, {page}
    )));
  }, [services.history]);

  return <Layout>
    <UI.NavBar logo />
    <h1>Create Page</h1>
    <UI.Forms.Controlled.Form state={fetchSuccess({})} onSubmit={onSubmit}>
      <FlexBlockEditor
        blocks={allBlocks}
        actions={actions}
        fields={fieldTypes}
        type="flex_page"
        name="page"
        FormContext={UI.Forms.Controlled.FormStateContext}
      />
      <UI.Forms.Controlled.Buttons />
    </UI.Forms.Controlled.Form>
  </Layout>;
};

export const editorScreen = createRoute({name: 'EditorScreen',
  path: '/edit',
  handler: makeScreen(EditorScreen)
});
