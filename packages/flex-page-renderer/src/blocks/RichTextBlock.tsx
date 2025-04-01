import { Html } from '../components/Html';
import './RichTextBlock.css';

export interface RichTextBlockConfig {
  id: string;
  type: 'text';
  value: string;
}

RichTextBlock.blockConfig = {
  type: 'text',
  categories: ['content'],
  field: {name: 'text', type: 'rich-text'},
};

export function RichTextContent({html}: {html: string}) {
  return <Html block className='content-block-rich-text' html={html} />;
}

export function RichTextBlock({data}: {data: RichTextBlockConfig}) {
  return <RichTextContent html={data.value} />;
}
