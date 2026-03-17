import type * as UI from '@openstax/ui-components';
import React from 'react';
import Select from 'react-select';
type FancySelectProps = Omit<React.ComponentProps<typeof Select>, 'value'> & {
    label?: string;
    help?: string;
    name: string;
};
export declare const FancySelect: (Forms: typeof UI.Forms.Controlled) => ({ label, help, ...props }: FancySelectProps) => import("react/jsx-runtime").JSX.Element;
export declare const selectExtensions: ({ Forms }: {
    Forms: typeof UI.Forms.Controlled;
}) => {
    select: ({ label, help, ...props }: FancySelectProps) => import("react/jsx-runtime").JSX.Element;
};
export {};
