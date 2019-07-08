import { StoreConfig } from './types'
import Store from './Store'
function storeMethod(config: StoreConfig): any {
  let type = config.type || 'localStorage'
  let store = new Store(type)
  return store[config.method](config)
}

export default storeMethod
