// 字符化
function serialize(val) {
    return JSON.stringify(val);
}
// 反字符化
function deserialize(val) {
    try {
        return JSON.parse(val);
    }
    catch (e) {
        return val || undefined;
    }
}
// 混合对象
function extend(to, from) {
    for (var key in from) {
        to[key] = from[key];
    }
    return to;
}

var Store = /** @class */ (function () {
    function Store(type) {
        this.disabled = false;
        try {
            // 如果禁用了cookie，这里会捕获异常
            var test_1 = window.localStorage;
        }
        catch (e) {
            this.disabled = true;
            return;
        }
        this.storage = window[type];
    }
    Store.prototype.do = function (config) {
        if (this.disabled)
            return null;
        // this[config.method](config.key,config.value)
        switch (config.method) {
            case 'get':
                return this.get(config.key);
            case 'set':
                return this.set(config.key, config.value);
            case 'clear':
                return this.clear();
            case 'getAll':
                return this.getAll();
            case 'has':
                return this.has(config.key);
            case 'remove':
                return this.has(config.key);
            default:
                this.get(config.key);
        }
    };
    // 设置storage
    Store.prototype.set = function (key, value) {
        if (!key || this.disabled)
            return null;
        if (value === undefined) {
            this.remove(key);
        }
        this.storage.setItem(key, serialize(value));
        return value;
    };
    // 获取storage
    Store.prototype.get = function (key) {
        if (!key || this.disabled)
            return undefined;
        var val = deserialize(this.storage.getItem(key));
        return val === undefined || val === null ? undefined : val;
    };
    // 是否存在这个key
    Store.prototype.has = function (key) {
        if (!key || this.disabled)
            return false;
        return this.get(key) !== undefined;
    };
    // 移除这个key
    Store.prototype.remove = function (key) {
        if (!key || this.disabled)
            return;
        this.storage.removeItem(key);
    };
    // 清除storage
    Store.prototype.clear = function () {
        if (this.disabled)
            return;
        this.storage.clear();
    };
    // 获取所有的storage
    Store.prototype.getAll = function () {
        if (this.disabled)
            return {};
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

function createInstance(type) {
    if (type === void 0) { type = 'localStorage'; }
    var context = new Store(type);
    var instance = Store.prototype.do.bind(context);
    extend(instance, context);
    return instance;
}
var store = createInstance();
var session = createInstance('sessionStorage');
store.session = session;

export default store;
//# sourceMappingURL=b-storage.es5.js.map
