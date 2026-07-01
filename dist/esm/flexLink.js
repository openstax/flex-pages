import { readLinkTarget, writeLinkTarget } from '@openstax/flex-page-renderer/lib/linkBehavior';
import Quill from 'quill';
import Inline from 'quill/blots/inline';
export class FlexLink extends Inline {
    static create(value) {
        const node = super.create();
        node.setAttribute('data-flex-link', '');
        writeLinkTarget(node, value.target, value.href);
        return node;
    }
    static formats(domNode) {
        var _a, _b;
        const href = (_a = domNode.getAttribute('href')) !== null && _a !== void 0 ? _a : undefined;
        const target = (_b = readLinkTarget(domNode)) !== null && _b !== void 0 ? _b : (href ? { type: 'external', value: href } : null);
        return target ? { target, href } : undefined;
    }
    format(name, value) {
        if (name === FlexLink.blotName && value) {
            const { target, href } = value;
            writeLinkTarget(this.domNode, target, href);
        }
        else {
            super.format(name, value);
        }
    }
}
FlexLink.blotName = 'flexLink';
FlexLink.tagName = 'A';
Quill.register({ 'formats/flexLink': FlexLink }, true);
