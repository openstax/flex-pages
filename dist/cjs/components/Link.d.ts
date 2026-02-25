import React from 'react';
export interface LinkFields {
    text: string;
    ariaLabel?: string;
    target: {
        type: string;
        value: string;
        params?: Record<string, string>;
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
type LinkProps = {
    link: LinkFields;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare function Link({ link, ...props }: LinkProps): import("react/jsx-runtime").JSX.Element | null;
export {};
