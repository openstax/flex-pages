import React from 'react';
import * as UI from '@openstax/ui-components';
import { ActionConfig, BlockComponents } from '@openstax/flex-page-renderer/ContentBlockRoot';
export declare const FlexBlockEditor: ({ name, label, blocks, actions, fields, type, FormContext }: {
    name: string;
    label?: string | undefined;
    type?: string | undefined;
    blocks: BlockComponents<any>;
    actions?: ActionConfig | undefined;
    fields?: Record<string, React.ComponentType<any>> | undefined;
    categories?: string[] | undefined;
    FormContext?: React.Context<() => {
        data: Partial<UI.Forms.Controlled.AbstractFormData>;
        submit: () => void;
        namespace: string;
        state: import("@openstax/ts-utils/fetch").FetchState<UI.Forms.Controlled.AbstractFormData, string>;
        setInput: {
            fields: React.Dispatch<React.SetStateAction<Partial<UI.Forms.Controlled.AbstractFormData>>>;
            field: <F extends string>(fieldName: F) => (value: any) => void;
            merge: (input: Partial<UI.Forms.Controlled.AbstractFormData>) => void;
        };
    }> | undefined;
}) => JSX.Element;
