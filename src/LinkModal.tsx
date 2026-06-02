import { EditorField } from '@openstax/flex-page-editor/EditorFields';
import type { LinkTarget } from '@openstax/flex-page-renderer/lib/linkBehavior';
import { fetchSuccess } from '@openstax/ts-utils/fetch';
import type * as UI from '@openstax/ui-components';
import { Modal } from '@openstax/ui-components';
import type { LinkResult } from './linkEditing';

/*
 * The custom link editor. Hosts a link-text field plus the editor's
 * `link-target` field in an isolated sub-form, so the link is configured with
 * the same UI as structured link fields — including whatever the app registers
 * for `link-target` (e.g. the page picker). On submit it hands back the text +
 * LinkTarget for the caller to apply to the Quill selection.
 */
export const LinkModal = ({Forms, initialText, initial, onConfirm, onRemove, onCancel}: {
  Forms: typeof UI.Forms.Controlled;
  initialText: string;
  initial: LinkTarget | null;
  onConfirm: (result: LinkResult) => void;
  onRemove: () => void;
  onCancel: () => void;
}) => {
  // The modal is portaled but stays a React descendant of the page editor's
  // form, so a submit here bubbles (through React's tree) to the page form and
  // triggers its save. Stop the submit at the modal boundary.
  return <Modal show heading="Edit Link" onModalClose={onCancel}>
    <div onSubmit={(event) => event.stopPropagation()}>
      <Forms.Form
        state={fetchSuccess({text: initialText, target: initial ?? {}})}
        onSubmit={(data) => onConfirm({text: (data.text as string) ?? '', target: data.target as LinkTarget})}
      >
        <EditorField name="text" label="Link Text" type="text" required />
        <EditorField name="target" label="Link Target" type="link-target" />
        <Forms.Buttons />
        {initial ? <button type="button" onClick={onRemove}>Remove link</button> : null}
      </Forms.Form>
    </div>
  </Modal>;
};
