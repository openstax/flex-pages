import { quillExtensions } from '@openstax/flex-page-editor-quill-extension';
import { selectExtensions } from '@openstax/flex-page-editor-select-extension';
import { FlexBlockEditor } from '@openstax/flex-page-editor/Editor';
import type { RouteConfig } from '@openstax/flex-page-renderer/RouteContext';
import * as allBlocks from '@openstax/flex-page-renderer/blocks/index';
import {
  fetchError, fetchIdle, fetchLoading, FetchState,
  FetchStateType, fetchSuccess, stateHasData, stateHasError
} from '@openstax/ts-utils/fetch';
import * as UI from '@openstax/ui-components';
import { notFound, useSearchParams } from 'next/navigation';
import React from 'react';
import { actions } from '../lib/actions';
import { fetchPage, fetchPageList, getToken, type PageListItem, savePage } from '../lib/github';
import type { PageMetadata } from '../lib/pages';
import { PAGE_ID_ROUTE, pageIdHref } from '../lib/routes';
import styles from './EditorPage.module.css';
import { pageLinkExtension, PagesContext } from './PageLinkTarget';
import { TokenInput } from './TokenInput';

const fieldTypes = {
  ...quillExtensions({Forms: UI.Forms.Controlled}),
  ...selectExtensions({Forms: UI.Forms.Controlled}),
  ...pageLinkExtension,
};

// The page-id route, passed to the editor for completeness. Our PageLinkTarget
// extension overrides the link-target field and resolves pages itself, so this
// isn't consumed by the link editor — but it keeps RouteContext correct for any
// non-overridden link-target consumer.
const editorRoutes: RouteConfig = {
  [PAGE_ID_ROUTE]: {
    id: PAGE_ID_ROUTE,
    label: 'Page',
    render: (params) => pageIdHref(params?.id),
    handler: () => undefined,
    fields: [{name: 'id', label: 'Page Id', type: 'text', required: true}],
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PageData = {page: any; metadata: PageMetadata; sha: string};

const EditorPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  if (!id) notFound(); 

  const [token, setToken] = React.useState<string | null>(getToken);
  const [state, setState] = React.useState<FetchState<PageData, string>>(fetchIdle());
  const [pages, setPages] = React.useState<PageListItem[]>([]);

  React.useEffect(() => {
    if (!id || !token) return;
    if (state.type !== FetchStateType.IDLE) return;

    setState(previous => fetchLoading(previous));
    fetchPage(id, token)
      .then(({page, metadata, sha}) => setState(fetchSuccess({page, metadata, sha})))
      .catch((err: Error) => setState(previous => fetchError(err.message, previous)));
  }, [id, token, state]);

  // Live list of pages for the link-target page picker, keyed by id.
  React.useEffect(() => {
    if (!token) return;
    fetchPageList(token).then(setPages).catch(() => setPages([]));
  }, [token]);

  const onSubmit = React.useCallback((data: UI.Forms.Controlled.AbstractFormData) => {
    if (id && token && stateHasData(state)) {
      setState(previous => fetchLoading(previous));
      savePage(id, data.page, data.metadata, state.data.sha, token)
        .then(({sha}) => setState(fetchSuccess({page: data.page, metadata: data.metadata, sha})))
        .catch((err: Error) => setState(previous => fetchError(err.message, previous)));
    }
  }, [id, token, state]);

  return <>
    <h1>Edit: {id}</h1>
    {!token
      ? <>
          <p>A GitHub token with repo access is required to load and save pages.</p>
          <TokenInput onTokenChange={setToken} />
        </>
      : <>
          <TokenInput onTokenChange={(t) => { setToken(t); setState(fetchIdle()); }} />
          {stateHasError(state) && <p className={styles.error}>Error: {state.error}</p>}
          {state.type === FetchStateType.LOADING && <p>Loading...</p>}
          {stateHasData(state) && <>
            <UI.Forms.Controlled.Form
              state={state.data.page ? fetchSuccess({page: state.data.page, metadata: state.data.metadata}) : fetchSuccess({})}
              onSubmit={onSubmit}
            >
              <fieldset className={styles.metadata}>
                <legend>Page Metadata</legend>
                <UI.Forms.Controlled.NameSpace name="metadata">
                  <UI.Forms.Controlled.TextInput name="title" label="Title" />
                  <UI.Forms.Controlled.TextArea name="description" label="Description" />
                  <UI.Forms.Controlled.TextInput name="url" label="URL" />
                </UI.Forms.Controlled.NameSpace>
              </fieldset>
              <PagesContext.Provider value={pages}>
                <FlexBlockEditor
                  blocks={allBlocks}
                  actions={actions}
                  routes={editorRoutes}
                  fields={fieldTypes}
                  type="flex_page"
                  name="page"
                  Forms={UI.Forms.Controlled}
                />
              </PagesContext.Provider>
              <UI.Forms.Controlled.Buttons />
            </UI.Forms.Controlled.Form>
          </>}
        </>
    }
  </>;
};

export default EditorPage;
