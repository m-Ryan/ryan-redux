"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
exports.connect = react_redux_1.connect;
exports.Provider = react_redux_1.Provider;
var createStore_1 = __importDefault(require("./createStore"));
exports.createStore = createStore_1.default;
var Model_1 = __importDefault(require("./Model"));
exports.ReduxModel = Model_1.default;
//# sourceMappingURL=index.js.map