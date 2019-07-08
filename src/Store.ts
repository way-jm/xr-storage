import { StorageType, AllRes, StoreConfig } from './types'
import { serialize, deserialize } from './helps'
class Store {
  storage: any

  constructor(type: StorageType = 'localStorage') {
    this.storage = window[type]
  }
  // 设置storage
  set(config: StoreConfig): any {
    const { key = null, value = undefined } = config
    if (!key) return null
    if (value === undefined) {
      this.remove(config)
    }
    this.storage.setItem(key, serialize(value))
    return value
  }
  // 获取storage
  get(config: StoreConfig): any {
    const { key = null } = config
    if (!key) return undefined
    let val = deserialize(this.storage.getItem(key))
    return val === undefined || val === null ? undefined : val
  }

  // 是否存在这个key
  has(config: StoreConfig): boolean {
    return this.get(config) !== undefined
  }

  // 移除这个key
  remove(config: StoreConfig): void {
    const { key = null } = config
    this.storage.removeItem(key)
  }
  // 清除storage
  clear(config: StoreConfig): void {
    this.storage.clear()
  }
  // 获取所有的storage
  getAll(config: StoreConfig): object {
    let ret: AllRes
    ret = {}
    this.forEach((key: string, val: any) => {
      ret[key] = val
    })
    return ret
  }
  // 遍历
  forEach(callback: any) {
    for (let i = 0; i < this.storage.length; i++) {
      let key = this.storage.key(i)
      callback(key, this.get({ key: key, method: 'get' }))
    }
  }
}

export default Store
