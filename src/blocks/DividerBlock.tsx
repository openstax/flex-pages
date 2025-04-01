import cn from 'classnames';
import { Image, ImageFields } from '../components/Image';
import { findByType } from '../utils';
import { ctaLinkFieldConfig } from './CTABlock';
import './DividerBlock.css';

export type DividerConfigOptions = {
    type: 'width';
    value: string;
} | {
    type: 'height';
    value: string;
} | {
    type: 'alignment';
    value: string;
} | {
    type: 'offset_vertical';
    value: string;
} | {
    type: 'offset_horizontal';
    value: string;
};

export interface DividerBlockConfig {
    id: string;
    type: 'divider';
    value: {
        image: ImageFields;
        config: DividerConfigOptions[];
    };
}

DividerBlock.blockConfig = {
  type: 'divider',
  categories: ['structure'],
  fields: [
    {name: 'cards', type: 'list', fields: [
      {name: 'text', type: 'text'},
      {name: 'ctaBlock', type: 'list', fields: ctaLinkFieldConfig, max: 1},
    ]},
    {name: 'config', type: 'configs', configs: [
      {name: 'width', type: 'text'},
      {name: 'height', type: 'text'},
      {name: 'alignment', type: 'select', options: [
        {label: 'Left side of Content', value: 'content_left'},
        {label: 'Right side of Content', value: 'content_right'},
        {label: 'Left side of Page', value: 'body_left'},
        {label: 'Right side of Page', value: 'body_right'},
        {label: 'Center', value: 'center'},
      ]},
      {name: 'offset_vertical', type: 'text'},
      {name: 'offset_horizontal', type: 'text'},
    ]},
  ],
};

function getTransform(config: DividerConfigOptions[]) {
    const offsetVertical = findByType(config, 'offset_vertical')?.value ?? '-50%';
    const offsetHorizontal = findByType(config, 'offset_horizontal')?.value ?? '0px';

    return `translateY(${offsetVertical}) translateX(${offsetHorizontal})`;
}

export function DividerBlock({data}: {data: DividerBlockConfig}) {
    const width = findByType(data.value.config, 'width')?.value;
    const height = findByType(data.value.config, 'height')?.value;
    const alignment = findByType(data.value.config, 'alignment')?.value;
    const alignmentClass = alignment ? `align_${alignment}` : null;
    const transform = getTransform(data.value.config);

    return <div className={cn('content-block-divider', alignmentClass)}>
        <Image
            style={{width, height, transform}}
            className="divider-image"
            image={data.value.image}
            alt=""
        />
    </div>;
}
