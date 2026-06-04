import React from 'react';
import type { ImageFields } from './Image.fields.js';

export type { ImageFields } from './Image.fields.js';

type ImageProps = {
    image: ImageFields;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export function Image({image, ...props}: ImageProps) {
    return <img {...props} src={image.file} width={image.width} height={image.height} />;
}
