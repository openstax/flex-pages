import type { LinkTarget } from '@openstax/flex-page-renderer/lib/linkBehavior';
import Quill from 'quill';
export type LinkEdit = {
    index: number;
    length: number;
    text: string;
    initial: LinkTarget | null;
};
export type LinkResult = {
    text: string;
    target: LinkTarget;
};
export declare function selectionLinkEdit(quill: Quill): LinkEdit | null;
export declare function anchorLinkEdit(quill: Quill, anchor: HTMLAnchorElement): LinkEdit;
export declare function attachLinkClick(quill: Quill, open: (anchor: HTMLAnchorElement) => void): () => void;
export declare function applyLink(quill: Quill, edit: LinkEdit, { text, target }: LinkResult, href?: string): void;
export declare function removeLink(quill: Quill, edit: LinkEdit): void;
