import DOMPurify from 'isomorphic-dompurify';
type Config = DOMPurify.Config;
/** Sanitize HTML to a string using the renderer's default DOMPurify config. */
export declare const sanitizeHTML: (html: string, config?: Config) => string;
/** Sanitize HTML to a detached DOM node, for callers that post-process it. */
export declare const sanitizeHTMLToDom: (html: string, config?: Config) => HTMLElement;
export {};
