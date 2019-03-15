"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var setModel_1 = require("./setModel");
var combineModel_1 = require("./combineModel");
function createStore(model, preloadedState, enhancer) {
    var reducers = combineModel_1.combindModel(model);
    var store = redux_1.createStore(reducers, preloadedState, enhancer);
    setModel_1.setModel(model, store);
    return store;
}
exports.default = createStore;
//# sourceMappingURL=createStore.js.map