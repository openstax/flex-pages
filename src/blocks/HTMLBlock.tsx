import { Html } from '../components/Html';

export interface HTMLBlockConfig {
  id: string;
  type: 'html';
  value: string;
}

HTMLBlock.blockConfig = {
  type: 'html',
  categories: ['structure'],
  field: {name: 'html', type: 'long-text'} ,
};


export function HTMLBlock({data}: {data: HTMLBlockConfig}) {
    return <Html sanitize={false} block html={data.value} />;
}
