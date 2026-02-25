import React from 'react';
export interface ImageFields {
    id?: string;
    file: string;
    height: number;
    width: number;
}
export declare const imageFieldsConfig: {
    name: string;
    label: string;
    help: string;
    type: string;
}[];
type ImageProps = {
    image: ImageFields;
} & React.ImgHTMLAttributes<HTMLImageElement>;
export declare function Image({ image, ...props }: ImageProps): import("react/jsx-runtime").JSX.Element;
export {};
