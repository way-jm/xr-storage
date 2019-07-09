"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helps_1 = require("./helps");
var Store = /** @class */ (function () {
    function Store(type) {
        this.storage = window[type];
    }
    Store.prototype.do = function (config) {
        // this[config.method](config.key,config.value)
        switch (config.method) {
            case 'get':
                this.get(config.key);
                break;
            case 'set':
                this.set(config.key, config.value);
                break;
            case "clear":
                this.clear();
                break;
            case "getAll":
                this.getAll();
                break;
            case "has":
                this.has(config.key);
                break;
            case "remove":
                this.has(config.key);
                break;
            default:
                this.get(config.key);
        }
    };
    // 设置storage
    Store.prototype.set = function (key, value) {
        if (!key)
            return null;
        if (value === undefined) {
            this.remove(key);
        }
        this.storage.setItem(key, helps_1.serialize(value));
        return value;
    };
    // 获取storage
    Store.prototype.get = function (key) {
        if (!key)
            return undefined;
        var val = helps_1.deserialize(this.storage.getItem(key));
        return val === undefined || val === null ? undefined : val;
    };
    // 是否存在这个key
    Store.prototype.has = function (key) {
        return this.get(key) !== undefined;
    };
    // 移除这个key
    Store.prototype.remove = function (key) {
        this.storage.removeItem(key);
    };
    // 清除storage
    Store.prototype.clear = function () {
        this.storage.clear();
    };
    // 获取所有的storage
    Store.prototype.getAll = function () {
        var ret;
        ret = {};
        this.forEach(function (key, val) {
            ret[key] = val;
        });
        return ret;
    };
    // 遍历
    Store.prototype.forEach = function (callback) {
        for (var i = 0; i < this.storage.length; i++) {
            var key = this.storage.key(i);
            callback(key, this.get(key));
        }
    };
    return Store;
}());
exports.default = Store;
//# sourceMappingURL=Store.js.map