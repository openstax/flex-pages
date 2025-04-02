import React from 'react';

export interface ImageFields {
    id?: string;
    file: string;
    height: number;
    width: number;
}

export const imageFieldsConfig = [
  {name: 'file', label: 'File Path', help: 'URL to the image file.', type: 'text'},
  {name: 'height', label: 'Height', help: 'The raw pixel height of the image.', type: 'number'},
  {name: 'width', label: 'Width', help: 'The raw pixel width of the image.', type: 'number'},
];

type ImageProps = {
    image: ImageFields;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export function Image({image, ...props}: ImageProps) {
    return <img {...props} src={image.file} width={image.width} height={image.height} />;
}

