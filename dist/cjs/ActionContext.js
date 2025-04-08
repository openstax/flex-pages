"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionContext = void 0;
const react_1 = __importDefault(require("react"));
// actions could probably have a payload, which would be configured in the editor
// on a per button basis, but i'm not bothering yet.
exports.ActionContext = react_1.default.createContext({});
