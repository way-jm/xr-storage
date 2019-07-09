"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helps_1 = require("./helps");
var Store_1 = require("./Store");
function createInstance(type) {
    if (type === void 0) { type = 'localStorage'; }
    var context = new Store_1.default(type);
    var instance = Store_1.default.prototype.do.bind(context);
    helps_1.extend(instance, context);
    return instance;
}
var store = createInstance();
var session = createInstance('sessionStorage');
store.session = session;
exports.default = store;
//# sourceMappingURL=index.js.map