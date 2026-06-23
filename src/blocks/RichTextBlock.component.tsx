import cn from 'classnames';
import { Html } from '../components/Html.js';
import { RawHtmlWithLinks } from '../components/RawHtmlWithLinks.js';
import './RichTextBlock.css';

export interface RichTextBlockConfig {
  id: string;
  type: 'text';
  value: string;
}

// Renders rich-text HTML inside a single block element. Callers may forward
// `id`/`className`/`hidden` so the rendered element can stand in for a wrapper
// they would otherwise add around it; `className` is merged with the block's
// own `content-block-rich-text` class.
export function RichTextContent({html, id, className, hidden}: {
  html: string;
  id?: string;
  className?: string;
  hidden?: boolean;
}) {
  const props = {block: true, id, hidden, className: cn('content-block-rich-text', className)};
  // Cheap server-side discriminator: only escalate to the client renderer when
  // the markup actually contains a dynamic link. Link-free prose stays a
  // zero-JS server render. (No false negatives — the editor always writes the
  // literal `data-flex-link` attribute; a false positive merely ships unused JS.)
  if (html.includes('data-flex-link')) {
    return <RawHtmlWithLinks {...props} html={html} />;
  }
  return <Html {...props} html={html} />;
}

export function RichTextBlock({data}: {data: RichTextBlockConfig}) {
  return <RichTextContent html={data.value} />;
}
