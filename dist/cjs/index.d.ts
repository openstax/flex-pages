/// <reference types="react" />
import 'quill/dist/quill.snow.css';
export declare const RichTextInput: ({ name, label, required, help }: {
    name: string;
    label: string;
    required?: boolean | undefined;
    help?: string | undefined;
}) => JSX.Element;
export declare const quillExtensions: {
    'rich-text': ({ name, label, required, help }: {
        name: string;
        label: string;
        required?: boolean | undefined;
        help?: string | undefined;
    }) => JSX.Element;
};
