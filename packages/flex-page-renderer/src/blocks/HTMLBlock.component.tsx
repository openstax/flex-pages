import { Html } from '../components/Html.js';

export interface HTMLBlockConfig {
  id: string;
  type: 'html';
  value: string;
}

export function HTMLBlock({data}: {data: HTMLBlockConfig}) {
  return <Html sanitize={false} block html={data.value} />;
}
