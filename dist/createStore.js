"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var setModel_1 = require("./setModel");
var combineModel_1 = require("./combineModel");
function createStore(model) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var reducers = combineModel_1.combindModel(model);
    var store = redux_1.createStore.apply(void 0, [reducers].concat(args));
    setModel_1.setModel(model, store);
    return store;
}
exports.default = createStore;
//# sourceMappingURL=createStore.js.map