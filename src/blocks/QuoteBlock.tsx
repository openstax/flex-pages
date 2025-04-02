import { Image, ImageFields, imageFieldsConfig } from '../components/Image';
import { RichTextContent } from './RichTextBlock';
import './QuoteBlock.css';

export interface QuoteBlockConfig {
  id: string;
  type: 'quote';
  value: {
    image: ImageFields;
    content: string;
    name: string;
    title?: string;
  };
}

QuoteBlock.blockConfig = {
  type: 'quote',
  categories: ['content'],
  label: 'Quote',
  fields: [
    {name: 'content', label: 'Quote Text', type: 'long-text', required: true},
    {name: 'title', label: 'Quotee\'s title', type: 'text'},
    {name: 'name', label: 'Quotee\'s name', type: 'text', required: true},
    {name: 'image', label: 'Image', type: 'namespace', fields: imageFieldsConfig},
  ],
};

export function QuoteBlock({data}: {data: QuoteBlockConfig}) {
  return <div className="content-block-quote">
    <Image alt="" image={data.value.image} />
    <RichTextContent html={data.value.content} />
    <div className="quotee">
      <span className="name">{data.value.name}</span>
      {data.value.title ? <span className="title">{data.value.title}</span> : null}
    </div>
  </div>;
}
