import type { LinkTarget } from '@openstax/flex-page-renderer/lib/linkBehavior';
import { readLinkTarget, writeLinkTarget } from '@openstax/flex-page-renderer/lib/linkBehavior';
import Quill from 'quill';
import Inline from 'quill/blots/inline';

/*
 * Rich-text links stored in the shared `data-flex-link` format. This replaces
 * Quill's built-in `link` format entirely (which the editor disables via its
 * formats whitelist): create()/formats() round-trip through the same
 * writeLinkTarget/readLinkTarget the renderer uses, so the serialized anchors
 * are exactly what mapPageNodes + RawHtmlWithLinks consume.
 *
 * A plain `<a href>` — pasted, or authored before flex links existed — is
 * absorbed as an external link with its href as the value, so it normalizes
 * into the flex format and is editable in the custom link modal.
 */
// The flexLink format value pairs the link target with its resolved href, so
// the anchor can carry a concrete href the editor resolved (e.g. a page route's
// url, via RouteContext) without the blot needing any resolver itself.
export type FlexLinkValue = {target: LinkTarget; href?: string};

export class FlexLink extends Inline {
  static blotName = 'flexLink';
  static tagName = 'A';

  static create(value: FlexLinkValue) {
    const node = super.create() as HTMLElement;
    node.setAttribute('data-flex-link', '');
    writeLinkTarget(node, value.target, value.href);
    return node;
  }

  static formats(domNode: HTMLElement): FlexLinkValue | undefined {
    const href = domNode.getAttribute('href') ?? undefined;
    const target = readLinkTarget(domNode) ?? (href ? {type: 'external', value: href} : null);
    return target ? {target, href} : undefined;
  }

  format(name: string, value: unknown) {
    if (name === FlexLink.blotName && value) {
      const {target, href} = value as FlexLinkValue;
      writeLinkTarget(this.domNode as HTMLElement, target, href);
    } else {
      super.format(name, value);
    }
  }
}

Quill.register({'formats/flexLink': FlexLink}, true);
