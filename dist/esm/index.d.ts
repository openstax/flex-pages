import React from 'react';
import type * as UI from '@openstax/ui-components';
import Select from 'react-select';
export declare const FancySelect: (Forms: typeof UI.Forms.Controlled) => ({ label, help, ...props }: Omit<React.ComponentProps<Select>, 'value'>) => JSX.Element;
export declare const selectExtensions: ({ Forms }: {
    Forms: typeof UI.Forms.Controlled;
}) => {
    select: ({ label, help, ...props }: Omit<React.ComponentProps<Select>, 'value'>) => JSX.Element;
};
