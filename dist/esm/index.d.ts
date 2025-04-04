/// <reference types="react" />
import type * as UI from '@openstax/ui-components';
import 'quill/dist/quill.snow.css';
export declare const RichTextInput: (Forms: typeof UI.Forms.Controlled) => ({ name, label, required, help }: {
    name: string;
    label: string;
    required?: boolean | undefined;
    help?: string | undefined;
}) => JSX.Element;
export declare const quillExtensions: ({ Forms }: {
    Forms: typeof UI.Forms.Controlled;
}) => {
    'rich-text': ({ name, label, required, help }: {
        name: string;
        label: string;
        required?: boolean | undefined;
        help?: string | undefined;
    }) => JSX.Element;
};
