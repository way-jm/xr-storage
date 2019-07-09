export type Method = 'set' | 'get' | 'has' | 'remove' | 'clear' | 'getAll'
export type StorageType = 'localStorage' | 'sessionStorage'

export interface StoreConfig {
  method: Method
  key?: string
  value?: any
}

export interface AllRes {
  [propName: string]: any
}

// 定义store是一个混合对象：本身是一个函数，又有很多方法属性

export interface Store {
  get(key: string): any
  set(key: string, value: any): any
  clear(): any
  getAll(): any
  has(key: string): any
  remove(key: string): any
  session: any
}

export interface StoreInstance extends Store {
  (config: StoreConfig): any
}
