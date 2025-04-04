import React from 'react';
import type { ConfigField } from '@openstax/flex-page-renderer';
export declare const EditorFieldTypeContext: React.Context<Record<string, React.ComponentType<any>>>;
export declare function ExtendEditorTypes({ fields, children }: React.PropsWithChildren<{
    fields: Record<string, React.ComponentType<any>>;
}>): JSX.Element;
export declare function EditorFields({ fields }: {
    fields: ConfigField[];
}): JSX.Element;
export declare function EditorField({ type, ...field }: React.PropsWithChildren<ConfigField>): JSX.Element;
