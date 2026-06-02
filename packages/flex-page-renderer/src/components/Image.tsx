import React from 'react';
import type { ImageFields } from './Image.fields';

export type { ImageFields } from './Image.fields';

type ImageProps = {
    image: ImageFields;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export function Image({image, ...props}: ImageProps) {
    return <img {...props} src={image.file} width={image.width} height={image.height} />;
}
