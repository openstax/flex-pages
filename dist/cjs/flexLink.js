"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexLink = void 0;
const linkBehavior_1 = require("@openstax/flex-page-renderer/lib/linkBehavior");
const quill_1 = __importDefault(require("quill"));
const inline_1 = __importDefault(require("quill/blots/inline"));
class FlexLink extends inline_1.default {
    static create(value) {
        const node = super.create();
        node.setAttribute('data-flex-link', '');
        (0, linkBehavior_1.writeLinkTarget)(node, value.target, value.href);
        return node;
    }
    static formats(domNode) {
        var _a, _b;
        const href = (_a = domNode.getAttribute('href')) !== null && _a !== void 0 ? _a : undefined;
        const target = (_b = (0, linkBehavior_1.readLinkTarget)(domNode)) !== null && _b !== void 0 ? _b : (href ? { type: 'external', value: href } : null);
        return target ? { target, href } : undefined;
    }
    format(name, value) {
        if (name === FlexLink.blotName && value) {
            const { target, href } = value;
            (0, linkBehavior_1.writeLinkTarget)(this.domNode, target, href);
        }
        else {
            super.format(name, value);
        }
    }
}
exports.FlexLink = FlexLink;
FlexLink.blotName = 'flexLink';
FlexLink.tagName = 'A';
quill_1.default.register({ 'formats/flexLink': FlexLink }, true);
