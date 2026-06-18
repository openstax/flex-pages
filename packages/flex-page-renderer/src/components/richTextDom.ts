// Shared DOM cleanup for rendered rich text.

/**
 * Remove paragraphs that render as blank vertical gaps — empty (`<p></p>`),
 * `<br>`-only (`<p><br></p>`), or whitespace/nbsp-only — while keeping
 * paragraphs that carry media such as an image. Editors routinely leave blank
 * lines in the rich-text editor and these otherwise render as stray spacing.
 */
export function stripEmptyParagraphs(root: ParentNode): void {
  root.querySelectorAll('p').forEach((p) => {
    // Treat non-breaking spaces as blank too (trim() doesn't remove \u00a0).
    const text = (p.textContent ?? '').replace(/\u00a0/g, ' ').trim();
    const hasMedia = p.querySelector('img, picture, svg, iframe, video, audio, embed, object') !== null;
    if (!text && !hasMedia) p.remove();
  });
}
