import { Html } from '../components/Html';

export interface HTMLBlockConfig {
  id: string;
  type: 'html';
  value: string;
}

HTMLBlock.blockConfig = {
  type: 'html',
  categories: ['structure', 'content'],
  label: 'HTML',
  field: {name: 'html', label: 'HTML', help: 'Raw html to be embedded in the page', type: 'long-text'},
};


export function HTMLBlock({data}: {data: HTMLBlockConfig}) {
  return <Html sanitize={false} block html={data.value} />;
}
