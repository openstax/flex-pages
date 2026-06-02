import type { LinkTarget } from '@openstax/flex-page-renderer/lib/linkBehavior';
import { readLinkTarget } from '@openstax/flex-page-renderer/lib/linkBehavior';
import Quill from 'quill';
import { FlexLink, FlexLinkValue } from './flexLink';

/*
 * Pure helpers for the custom link-editing flow, kept out of the editor
 * component so index.tsx is just Quill wiring + composition. All flexLink
 * reads/writes go through these.
 */
export type LinkEdit = {index: number; length: number; text: string; initial: LinkTarget | null};

export type LinkResult = {text: string; target: LinkTarget};

// Toolbar link button: edit the link covering the current selection.
export function selectionLinkEdit(quill: Quill): LinkEdit | null {
  const range = quill.getSelection();
  if (!range) return null;
  const initial = (quill.getFormat(range)[FlexLink.blotName] as FlexLinkValue | undefined)?.target ?? null;
  return {index: range.index, length: range.length, text: quill.getText(range.index, range.length), initial};
}

// Link click: edit the whole anchor. A bare `<a href>` (no flex data) opens as
// an external link with its href as the value.
export function anchorLinkEdit(quill: Quill, anchor: HTMLAnchorElement): LinkEdit {
  const blot = Quill.find(anchor);
  const index = blot ? quill.getIndex(blot as Parameters<typeof quill.getIndex>[0]) : 0;
  const length = blot ? (blot as {length(): number}).length() : 0;
  const initial = readLinkTarget(anchor)
    ?? {type: 'external', value: anchor.getAttribute('href') ?? ''};
  return {index, length, text: anchor.textContent ?? '', initial};
}

// Open the editor whenever a link is clicked — replaces the native link
// tooltip. Returns a cleanup to detach the listener.
export function attachLinkClick(quill: Quill, open: (anchor: HTMLAnchorElement) => void): () => void {
  const onClick = (event: MouseEvent) => {
    const anchor = (event.target as HTMLElement | null)?.closest?.('a');
    if (!anchor) return;
    event.preventDefault();
    open(anchor);
  };
  quill.root.addEventListener('click', onClick);
  return () => quill.root.removeEventListener('click', onClick);
}

// `href` is the target resolved to a concrete url by the caller (e.g. a route
// link via RouteContext); url-typed targets can omit it (writeLinkTarget mirrors
// the value).
export function applyLink(quill: Quill, edit: LinkEdit, {text, target}: LinkResult, href?: string): void {
  const {index, length} = edit;
  const value: FlexLinkValue = {target, href};
  // Unchanged text over a real selection: just (re)apply the format, preserving
  // any sub-formatting (bold, etc.) within the link text.
  if (length > 0 && text === edit.text) {
    quill.formatText(index, length, FlexLink.blotName, value, 'user');
    return;
  }
  // Otherwise replace the range with the (new) link text.
  if (length > 0) quill.deleteText(index, length, 'user');
  quill.insertText(index, text || target.value || 'link', FlexLink.blotName, value, 'user');
}

export function removeLink(quill: Quill, edit: LinkEdit): void {
  if (edit.length > 0) quill.formatText(edit.index, edit.length, FlexLink.blotName, false, 'user');
}
