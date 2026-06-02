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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
exports.blocks = exports.resolveContentBlocks = void 0;
var resolveContentBlocks_1 = require("./resolveContentBlocks");
Object.defineProperty(exports, "resolveContentBlocks", { enumerable: true, get: function () { return resolveContentBlocks_1.resolveContentBlocks; } });
/*
 * Render surface — everything a consumer needs to draw a Flex page. This barrel
 * is also the entry point for the UMD / <script>-tag build, so it must stay free
 * of server-only modules: notably ./lib/mapPageNodes, which imports jsdom (a
 * Node-only library that cannot bundle for the browser). That data-layer helper
 * stays available via its own subpath import; it deliberately does not belong on
 * the render root.
 */
__exportStar(require("./ContentBlockRoot"), exports); // ContentBlockRoot + ContentBlockContext types
__exportStar(require("./FlexPageContextProvider"), exports); // provider + ActionContext / RouteContext
exports.blocks = __importStar(require("./blocks")); // built-in block registry ({ Component, fields } per type)
