import { Html } from '../components/Html';
import { RawHtmlWithLinks } from '../components/RawHtmlWithLinks';
import './RichTextBlock.css';

export interface RichTextBlockConfig {
  id: string;
  type: 'text';
  value: string;
}

RichTextBlock.blockConfig = {
  type: 'text',
  categories: ['content'],
  label: 'Text',
  field: {name: 'text', label: 'Text', type: 'rich-text'},
};

export function RichTextContent({html}: {html: string}) {
  // Cheap server-side discriminator: only escalate to the client renderer when
  // the markup actually contains a dynamic link. Link-free prose stays a
  // zero-JS server render. (No false negatives — the editor always writes the
  // literal `data-flex-link` attribute; a false positive merely ships unused JS.)
  if (html.includes('data-flex-link')) {
    return <RawHtmlWithLinks block className='content-block-rich-text' html={html} />;
  }
  return <Html block className='content-block-rich-text' html={html} />;
}

export function RichTextBlock({data}: {data: RichTextBlockConfig}) {
  return <RichTextContent html={data.value} />;
}
