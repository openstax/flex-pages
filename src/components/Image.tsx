import React from 'react';

export interface ImageFields {
    id?: string;
    file: string;
    height: number;
    width: number;
}

export const imageFieldsConfig = [
  {name: 'file', type: 'text'},
  {name: 'height', type: 'number'},
  {name: 'width', type: 'number'},
];

type ImageProps = {
    image: ImageFields;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export function Image({image, ...props}: ImageProps) {
    return <img {...props} src={image.file} width={image.width} height={image.height} />;
}

