"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
function combindModel(reduxModels) {
    var result = {};
    var _loop_1 = function (k) {
        var model = reduxModels[k];
        result[k] = function (state, action) {
            if (state === void 0) { state = model.state; }
            var nameSpace = action.type;
            if (nameSpace === model.nameSpace) {
                if (state === action.payload) {
                    throw new Error('setState 返回的对象不能是原来的state对象');
                }
                state = action.payload;
                model.state = state;
            }
            return state;
        };
    };
    for (var k in reduxModels) {
        _loop_1(k);
    }
    return redux_1.combineReducers(result);
}
exports.combindModel = combindModel;
//# sourceMappingURL=combineModel.js.map