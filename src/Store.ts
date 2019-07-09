import { StorageType, AllRes, StoreConfig } from './types'
import { serialize, deserialize } from './helps'
class Store {
  storage: any
  disabled: boolean = false

  constructor(type: StorageType) {
    try {
      // 如果禁用了cookie，这里会捕获异常
      let test = window.localStorage
    } catch (e) {
      this.disabled = true
      return
    }
    this.storage = window[type]
  }
  do(config: StoreConfig): any {
    if (this.disabled) return null
    // this[config.method](config.key,config.value)
    switch (config.method) {
      case 'get':
        return this.get(config.key)
      case 'set':
        return this.set(config.key, config.value)
      case 'clear':
        return this.clear()
      case 'getAll':
        return this.getAll()
      case 'has':
        return this.has(config.key)
      case 'remove':
        return this.has(config.key)
      default:
        this.get(config.key)
    }
  }
  // 设置storage
  set(key: string | undefined, value?: any): any {
    if (!key || this.disabled) return null
    if (value === undefined) {
      this.remove(key)
    }
    this.storage.setItem(key, serialize(value))
    return value
  }
  // 获取storage
  get(key: string | undefined): any {
    if (!key || this.disabled) return undefined
    let val = deserialize(this.storage.getItem(key))
    return val === undefined || val === null ? undefined : val
  }

  // 是否存在这个key
  has(key: string | undefined): boolean {
    if (!key || this.disabled) return false
    return this.get(key) !== undefined
  }

  // 移除这个key
  remove(key: string | undefined): void {
    if (!key || this.disabled) return
    this.storage.removeItem(key)
  }
  // 清除storage
  clear(): void {
    if (this.disabled) return
    this.storage.clear()
  }
  // 获取所有的storage
  getAll(): object {
    if (this.disabled) return {}
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
      callback(key, this.get(key))
    }
  }
}

export default Store
