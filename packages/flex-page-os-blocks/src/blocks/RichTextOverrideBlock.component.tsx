import { RichTextContent } from '@openstax/flex-page-renderer/blocks/RichTextBlock.component';
import type { RichTextBlockConfig } from '@openstax/flex-page-renderer/blocks/RichTextBlock.component';
import './RichTextOverrideBlock.css';

// Proxy over the renderer's rich-text render: identical content output, plus an
// `os-rich-text` marker class. The extra stylesheet (RichTextOverrideBlock.scss)
// scopes the openstax-cms editor styles (eyebrow, brand text colors) to that
// class, so they apply only to this block — a plain `text` block renders the same
// markup unstyled. Registered under its own key, so both are usable side by side.
export function Component({data}: {data: RichTextBlockConfig}) {
  return <RichTextContent html={data.value} className='os-rich-text' />;
}
