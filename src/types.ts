export type Method = 'set' | 'get' | 'has' | 'remove' | 'clear' | 'getAll'
export type StorageType = 'localStorage' | 'sessionStorage'

export interface StoreConfig {
  method: Method
  data?: any
  type?: StorageType
  key?: string
  value?: any
}

export interface AllRes {
  [propName: string]: any
}
