import React from 'react';
import type { ImageFields } from './Image.fields.js';
export type { ImageFields } from './Image.fields.js';
type ImageProps = {
    image: ImageFields;
} & React.ImgHTMLAttributes<HTMLImageElement>;
export declare function Image({ image, ...props }: ImageProps): import("react/jsx-runtime").JSX.Element;
