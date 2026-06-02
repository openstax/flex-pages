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
export class FlexLink extends Inline {
  static blotName = 'flexLink';
  static tagName = 'A';

  static create(value: LinkTarget) {
    const node = super.create() as HTMLElement;
    node.setAttribute('data-flex-link', '');
    writeLinkTarget(node, value);
    return node;
  }

  static formats(domNode: HTMLElement): LinkTarget | undefined {
    const target = readLinkTarget(domNode);
    if (target) return target;
    const href = domNode.getAttribute('href');
    return href ? {type: 'external', value: href} : undefined;
  }

  format(name: string, value: unknown) {
    if (name === FlexLink.blotName && value) {
      writeLinkTarget(this.domNode as HTMLElement, value as LinkTarget);
    } else {
      super.format(name, value);
    }
  }
}

Quill.register({'formats/flexLink': FlexLink}, true);
