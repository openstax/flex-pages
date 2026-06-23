import DOMPurify from 'isomorphic-dompurify';

type Config = DOMPurify.Config;

// Default DOMPurify configuration for the renderer. Permits the iframe embed
// markup Wagtail rich text produces (oEmbed video players, FormAssembly forms);
// scripts, event handlers, and other dangerous markup are still stripped.
// Callers extend this through the config argument rather than mutating a shared
// DOMPurify instance.
const DEFAULT_CONFIG: Config = {
  ADD_TAGS: ['iframe'],
  ADD_ATTR: ['target', 'allow', 'allowfullscreen', 'frameborder', 'title'],
};

// Merge caller config onto the defaults; the tag/attr allowlists concatenate so
// callers add to them rather than replace them (a caller's own array is
// appended; the predicate-function form of these options is left to the spread).
const withDefaults = (config?: Config): Config => ({
  ...DEFAULT_CONFIG,
  ...config,
  ADD_TAGS: [...(DEFAULT_CONFIG.ADD_TAGS as string[]), ...(Array.isArray(config?.ADD_TAGS) ? config.ADD_TAGS : [])],
  ADD_ATTR: [...(DEFAULT_CONFIG.ADD_ATTR as string[]), ...(Array.isArray(config?.ADD_ATTR) ? config.ADD_ATTR : [])],
});

/** Sanitize HTML to a string using the renderer's default DOMPurify config. */
export const sanitizeHTML = (html: string, config?: Config): string =>
  DOMPurify.sanitize(html, withDefaults(config)) as string;

/** Sanitize HTML to a detached DOM node, for callers that post-process it. */
export const sanitizeHTMLToDom = (html: string, config?: Config): HTMLElement =>
  DOMPurify.sanitize(html, {...withDefaults(config), RETURN_DOM: true}) as unknown as HTMLElement;
