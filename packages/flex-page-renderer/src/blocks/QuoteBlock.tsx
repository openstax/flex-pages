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
  fields: [
    {name: 'content', type: 'text', required: true},
    {name: 'title', type: 'text'},
    {name: 'name', type: 'text', required: true},
    {name: 'image', type: 'namespace', fields: imageFieldsConfig},
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
