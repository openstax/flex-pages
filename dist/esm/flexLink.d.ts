import type { LinkTarget } from '@openstax/flex-page-renderer/lib/linkBehavior';
import Inline from 'quill/blots/inline';
export type FlexLinkValue = {
    target: LinkTarget;
    href?: string;
};
export declare class FlexLink extends Inline {
    static blotName: string;
    static tagName: string;
    static create(value: FlexLinkValue): HTMLElement;
    static formats(domNode: HTMLElement): FlexLinkValue | undefined;
    format(name: string, value: unknown): void;
}
