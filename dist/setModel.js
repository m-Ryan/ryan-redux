"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setModel(reduxModels, store) {
    var _loop_1 = function (i) {
        var model = reduxModels[i];
        var setState = model.setState;
        model.setState = function (payload) {
            var newState = setState(payload);
            store.dispatch({
                type: model.nameSpace,
                payload: payload
            });
            return newState;
        };
    };
    for (var i in reduxModels) {
        _loop_1(i);
    }
}
exports.setModel = setModel;
//# sourceMappingURL=setModel.js.map