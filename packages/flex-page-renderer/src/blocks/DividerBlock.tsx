import cn from 'classnames';
import { Image, ImageFields, imageFieldsConfig } from '../components/Image';
import { findByType } from '../utils';
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
  label: 'Divider',
  fields: [
    {name: 'image', label: 'Image', type: 'namespace', fields: imageFieldsConfig},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'width', label: 'Image Display Width', help: 'CSS text for the width to display the image', type: 'text'},
      {name: 'height', label: 'Image Display Height', help: 'CSS text for the height to display the image', type: 'text'},
      {name: 'alignment', label: 'Image Alignment', type: 'select', options: [
        {label: 'Left side of Content', value: 'content_left'},
        {label: 'Right side of Content', value: 'content_right'},
        {label: 'Left side of Page', value: 'body_left'},
        {label: 'Right side of Page', value: 'body_right'},
        {label: 'Center', value: 'center'},
      ]},
      {name: 'offset_vertical', label: 'Offset Vertical', help: 'CSS text for vertical offset eg `-50%` to center the image vertically', type: 'text'},
      {name: 'offset_horizontal', label: 'Offset Horizontal', help: 'CSS text for horizontal offset eg `-50%` to center the image horizontally', type: 'text'},
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
