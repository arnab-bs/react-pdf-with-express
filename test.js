"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var renderer_1 = require("@react-pdf/renderer");
var Template = function () {
    return (react_1.default.createElement(renderer_1.Page, { size: 'A4' },
        react_1.default.createElement(renderer_1.View, null,
            react_1.default.createElement(renderer_1.Text, null, "asdadasdasdasdasdas"))));
};
exports.default = Template;
