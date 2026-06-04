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
exports.flex_page = exports.tabbed_content = exports.columns = exports.well = exports.section = exports.text = exports.quote = exports.links_group = exports.hero = exports.html = exports.divider = exports.cards_block = exports.cta_block = void 0;
// Each block is a { Component, fields } namespace. `fields` lives in a
// directive-free module so it stays readable on the server even when Component
// is a client reference.
exports.cta_block = __importStar(require("./CTABlock.js"));
exports.cards_block = __importStar(require("./CardsBlock.js"));
exports.divider = __importStar(require("./DividerBlock.js"));
exports.html = __importStar(require("./HTMLBlock.js"));
exports.hero = __importStar(require("./HeroBlock.js"));
exports.links_group = __importStar(require("./LinksBlock.js"));
exports.quote = __importStar(require("./QuoteBlock.js"));
exports.text = __importStar(require("./RichTextBlock.js"));
exports.section = __importStar(require("./SectionBlock.js"));
exports.well = __importStar(require("./WellBlock.js"));
exports.columns = __importStar(require("./ColumnsBlock.js"));
exports.tabbed_content = __importStar(require("./TabbedContentBlock.js"));
exports.flex_page = __importStar(require("./FlexPage.js"));
