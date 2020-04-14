// type method,这里为了方便调用，不可以定义成枚举
type Methods = 'get' | 'set' | 'getAll' | 'has' | 'remove' | 'clear';

// 原则上可以存储值为任意类型的storage,所以这里的value的类型为any
interface paramsObjInterface {
  method: Methods;
  key?: string;
  value?: any;
}

// 定义xr-storage模块，它既是一个方法，也是一个属性，因为包本身就是一个混合对象
declare module 'xr-storage' {
  namespace xrStorage {
    function set(key: string, value: any): any;
    function get(key: string): any;
    function remove(key: string): void;
    function getAll(): object;
    function clear(): void;
    function has(key: string): boolean;
    namespace session {
      function set(key: string, value: any): any;
      function get(key: string): any;
      function remove(key: string): void;
      function getAll(): object;
      function clear(): void;
      function has(key: string): boolean;
    }
    function session(params: paramsObjInterface): any;
  }
  function xrStorage(params: paramsObjInterface): any;
  export = xrStorage;
}
