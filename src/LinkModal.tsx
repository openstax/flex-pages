import { EditorField } from '@openstax/flex-page-editor/EditorFields';
import type { LinkTarget } from '@openstax/flex-page-renderer/lib/linkBehavior';
import { fetchSuccess } from '@openstax/ts-utils/fetch';
import type * as UI from '@openstax/ui-components';
import { Modal } from '@openstax/ui-components';

/*
 * The custom link editor. Hosts the editor's `link-target` field in an isolated
 * sub-form, so the link is configured with the same UI as structured link
 * fields — including whatever the app registers for `link-target` (e.g. the
 * page picker). On submit it hands back the LinkTarget for the caller to apply
 * to the Quill selection.
 */
export const LinkModal = ({Forms, initial, onConfirm, onRemove, onCancel}: {
  Forms: typeof UI.Forms.Controlled;
  initial: LinkTarget | null;
  onConfirm: (target: LinkTarget) => void;
  onRemove: () => void;
  onCancel: () => void;
}) => {
  return <Modal show heading="Edit Link" onModalClose={onCancel}>
    <Forms.Form
      state={fetchSuccess({target: initial ?? {}})}
      onSubmit={(data) => onConfirm(data.target as LinkTarget)}
    >
      <EditorField name="target" label="Link Target" type="link-target" />
      <Forms.Buttons />
      {initial ? <button type="button" onClick={onRemove}>Remove link</button> : null}
    </Forms.Form>
  </Modal>;
};
