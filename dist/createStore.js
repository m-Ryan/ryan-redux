"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var setModel_1 = require("./setModel");
var combineModel_1 = require("./combineModel");
function createStore(models, preloadedState, enhancer) {
    var reducers = combineModel_1.combindModel(models);
    if (preloadedState) {
        for (var stateName in preloadedState) {
            for (var key in models) {
                if (stateName === models[key].nameSpace) {
                    models[key].state = preloadedState[stateName];
                }
            }
        }
    }
    var store = redux_1.createStore(reducers, preloadedState, enhancer);
    setModel_1.setModel(models, store);
    return store;
}
exports.default = createStore;
//# sourceMappingURL=createStore.js.map