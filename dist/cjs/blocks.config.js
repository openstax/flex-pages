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
exports.well = exports.tabbed_content = exports.section = exports.text = exports.quote = exports.links_group = exports.hero = exports.html = exports.flex_page = exports.divider = exports.columns = exports.cards_block = exports.cta_block = void 0;
// Each block is a { Component, config } namespace. this exports just the
// `config` for nodejs only data processing environments.
exports.cta_block = __importStar(require("./blocks/CTABlock.config.js"));
exports.cards_block = __importStar(require("./blocks/CardsBlock.config.js"));
exports.columns = __importStar(require("./blocks/ColumnsBlock.config.js"));
exports.divider = __importStar(require("./blocks/DividerBlock.config.js"));
exports.flex_page = __importStar(require("./blocks/FlexPage.config.js"));
exports.html = __importStar(require("./blocks/HTMLBlock.config.js"));
exports.hero = __importStar(require("./blocks/HeroBlock.config.js"));
exports.links_group = __importStar(require("./blocks/LinksBlock.config.js"));
exports.quote = __importStar(require("./blocks/QuoteBlock.config.js"));
exports.text = __importStar(require("./blocks/RichTextBlock.config.js"));
exports.section = __importStar(require("./blocks/SectionBlock.config.js"));
exports.tabbed_content = __importStar(require("./blocks/TabbedContentBlock.config.js"));
exports.well = __importStar(require("./blocks/WellBlock.config.js"));
