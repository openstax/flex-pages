import type { ConfigField } from '@openstax/flex-page-renderer';
import React from 'react';
export declare const EditorFieldTypeContext: React.Context<Record<string, React.ComponentType<any>>>;
export declare function ExtendEditorTypes({ fields, children }: React.PropsWithChildren<{
    fields: Record<string, React.ComponentType<any>>;
}>): import("react/jsx-runtime").JSX.Element;
export declare function EditorFields({ fields }: {
    fields: ConfigField[];
}): import("react/jsx-runtime").JSX.Element;
export declare function EditorField({ type, ...field }: React.PropsWithChildren<ConfigField>): import("react/jsx-runtime").JSX.Element;
