"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.content_card = exports.text = exports.book_tile_list = void 0;
// Component barrel: each block is a { Component, config } namespace keyed by its
// block type. Consumers merge this into the renderer's block map.
exports.book_tile_list = __importStar(require("./BookTileListBlock.js"));
// OpenStax variant of the renderer's rich-text block: identical content render,
// plus the openstax-cms editor stylesheet (scoped to this block via a marker
// class). Offered under the renderer's `text` key as a drop-in override; a host
// can instead register it under a separate key to use both versions side by side
// (the example app exposes it as `os_text`).
exports.text = __importStar(require("./RichTextOverrideBlock.js"));
exports.content_card = __importStar(require("./ContentCardBlock.js"));
