import type { ConfigField } from '@openstax/flex-page-renderer';
import { CollapsibleFieldset } from '../CollapsibleFieldset';
import { EditorField } from '../EditorFields';
import { useForms } from '../FormsContext';

// Default `image` configurator: the same file/height/width inputs the namespace
// field used to render, now nested under the field name via Forms.NameSpace.
// Hardcoded (rather than driven by a fields config) so an app can swap in a
// richer asset-management UI by overriding the `image` field type, exactly the
// way the link-target configurator is replaced. Editing only file/height/width
// leaves any adjacent data (e.g. an asset `id`) on the value untouched.
const ImageFieldInputs = () => <>
  <EditorField name="file" label="File Path" help="URL to the image file." type="text" />
  <EditorField name="height" label="Height" help="The raw pixel height of the image." type="number" />
  <EditorField name="width" label="Width" help="The raw pixel width of the image." type="number" />
</>;

export const ImageField = ({name, label}: ConfigField) => {
  const Forms = useForms();
  return <Forms.NameSpace name={name}>
    <CollapsibleFieldset legend={label}>
      <ImageFieldInputs />
    </CollapsibleFieldset>
  </Forms.NameSpace>;
};
