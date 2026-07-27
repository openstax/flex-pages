"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeHTMLToDom = exports.sanitizeHTML = void 0;
const isomorphic_dompurify_1 = __importDefault(require("isomorphic-dompurify"));
// Default DOMPurify configuration for the renderer. Permits the iframe embed
// markup Wagtail rich text produces (oEmbed video players, FormAssembly forms);
// scripts, event handlers, and other dangerous markup are still stripped.
// Callers extend this through the config argument rather than mutating a shared
// DOMPurify instance.
const DEFAULT_CONFIG = {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['target', 'allow', 'allowfullscreen', 'frameborder', 'title'],
};
// Merge caller config onto the defaults; the tag/attr allowlists concatenate so
// callers add to them rather than replace them (a caller's own array is
// appended; the predicate-function form of these options is left to the spread).
const withDefaults = (config) => ({
    ...DEFAULT_CONFIG,
    ...config,
    ADD_TAGS: [...DEFAULT_CONFIG.ADD_TAGS, ...(Array.isArray(config === null || config === void 0 ? void 0 : config.ADD_TAGS) ? config.ADD_TAGS : [])],
    ADD_ATTR: [...DEFAULT_CONFIG.ADD_ATTR, ...(Array.isArray(config === null || config === void 0 ? void 0 : config.ADD_ATTR) ? config.ADD_ATTR : [])],
});
/** Sanitize HTML to a string using the renderer's default DOMPurify config. */
const sanitizeHTML = (html, config) => isomorphic_dompurify_1.default.sanitize(html, withDefaults(config));
exports.sanitizeHTML = sanitizeHTML;
/** Sanitize HTML to a detached DOM node, for callers that post-process it. */
const sanitizeHTMLToDom = (html, config) => isomorphic_dompurify_1.default.sanitize(html, { ...withDefaults(config), RETURN_DOM: true });
exports.sanitizeHTMLToDom = sanitizeHTMLToDom;
