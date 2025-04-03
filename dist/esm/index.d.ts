import React from 'react';
import Select from 'react-select';
export declare const FancySelect: (props: Omit<React.ComponentProps<typeof UncontrolledFancySelect>, 'value'>) => JSX.Element;
declare const UncontrolledFancySelect: ({ label, help, ...props }: any) => JSX.Element;
export declare const selectExtensions: {
    select: (props: Omit<React.ComponentProps<typeof UncontrolledFancySelect>, 'value'>) => JSX.Element;
};
export {};
