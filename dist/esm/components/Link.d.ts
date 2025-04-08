import React from 'react';
export interface LinkFields {
    text: string;
    ariaLabel?: string;
    target: {
        type: string;
        value: string;
    };
}
export declare const linkFieldConfig: ({
    name: string;
    label: string;
    type: string;
    required: boolean;
} | {
    name: string;
    label: string;
    type: string;
    required?: undefined;
})[];
declare type LinkProps = {
    link: LinkFields;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare function Link({ link, ...props }: LinkProps): JSX.Element;
export {};
