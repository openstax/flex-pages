import DOMPurify from 'isomorphic-dompurify';

// Hosts whose <iframe> embeds are allowed to survive sanitization. Kept tight
// on purpose: oEmbed video providers plus FormAssembly forms. Anything else
// (arbitrary iframes, <script>, etc.) is still stripped.
const EMBED_HOSTS = [
  'youtube.com',
  'youtube-nocookie.com',
  'vimeo.com',
  'tfaforms.net',
];

const hostAllowed = (src: string): boolean => {
  try {
    const host = new URL(src, 'https://invalid.example').hostname;
    return EMBED_HOSTS.some((allowed) => host === allowed || host.endsWith(`.${allowed}`));
  } catch {
    return false;
  }
};

// Register once: drop any <iframe> whose src host isn't allowlisted. The hook is
// global to the DOMPurify singleton, which is what we want — every rich-text
// sanitize call should enforce the same embed allowlist.
let hookRegistered = false;
const ensureEmbedHook = (): void => {
  if (hookRegistered) return;
  DOMPurify.addHook('uponSanitizeElement', (node, data) => {
    if ((data.tagName ?? '').toLowerCase() !== 'iframe') return;
    const el = node as unknown as Element;
    if (!hostAllowed(el.getAttribute?.('src') ?? '')) {
      el.parentNode?.removeChild(el);
    }
  });
  hookRegistered = true;
};

const OPTIONS = {
  ADD_TAGS: ['iframe'],
  ADD_ATTR: ['target', 'allow', 'allowfullscreen', 'frameborder', 'title'],
};

/** Sanitize rich-text HTML to a string, allowing allowlisted embed iframes. */
export const sanitizeRichText = (html: string): string => {
  ensureEmbedHook();
  return DOMPurify.sanitize(html, OPTIONS) as string;
};

/** Sanitize rich-text HTML to a DOM node (for callers that post-process it). */
export const sanitizeRichTextToDom = (html: string): HTMLElement => {
  ensureEmbedHook();
  return DOMPurify.sanitize(html, {...OPTIONS, RETURN_DOM: true}) as unknown as HTMLElement;
};
