import { Html } from 'components/Html';

export interface HTMLBlockConfig {
  id: string;
  type: 'html';
  value: string;
}

export function HTMLBlock({data}: {data: HTMLBlockConfig}) {
    return <Html sanitize={false} block html={data.value} />;
}
