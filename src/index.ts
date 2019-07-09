import { StoreInstance, StorageType } from './types'
import { extend } from './helps'
import Store from './Store'

function createInstance(type: StorageType = 'localStorage'): StoreInstance {
  const context = new Store(type)
  const instance = Store.prototype.do.bind(context)
  extend(instance, context)
  return instance as StoreInstance
}

const store = createInstance()
const session = createInstance('sessionStorage')

store.session = session

export default store
