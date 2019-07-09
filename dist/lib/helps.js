"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 字符化
function serialize(val) {
    return JSON.stringify(val);
}
exports.serialize = serialize;
// 反字符化
function deserialize(val) {
    try {
        return JSON.parse(val);
    }
    catch (e) {
        return val || undefined;
    }
}
exports.deserialize = deserialize;
// 混合对象
function extend(to, from) {
    for (var key in from) {
        ;
        to[key] = from[key];
    }
    return to;
}
exports.extend = extend;
//# sourceMappingURL=helps.js.map