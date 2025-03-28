import { Html } from '../components/Html';
import './RichTextBlock.scss';

export interface RichTextBlockConfig {
    id: string;
    type: 'text';
    value: string;
}

export function RichTextContent({html}: {html: string}) {
    return <Html block className='content-block-rich-text' html={html} />;
}

export function RichTextBlock({data}: {data: RichTextBlockConfig}) {
    return <RichTextContent html={data.value} />;
}
