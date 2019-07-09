import store from '../src/index'

describe('util', () => {
  describe('test store', () => {
    test('test set & get', () => {
      store.set('testKey', 'testValue')
      let res = store.get('testKey')
      expect(res).toBe('testValue')
    })
    test('test getAll & clear', () => {
      store.clear()
      store.set('testKey', 'testValue')
      store({ method: 'clear' })
      store.set('testKey', 'testValue')
      let res = store.getAll()
      expect(res).toEqual({ testKey: 'testValue' })
    })
    test('test has & remove', () => {
      store.set('testKey', 'testValue')
      store({ method: 'remove', key: 'testKey' })
      let res = store.get('testKey')
      let has = store.has('testKey')
      expect(res).toBe(undefined)
      expect(has).toBe(false)
    })
    test('test set & get2', () => {
      store({ method: 'set', key: 'testKey', value: 'testValue' })
      let res = store({ method: 'get', key: 'testKey' })
      expect(res).toBe('testValue')
    })
    test('test has & getAll 2', () => {
      store({ method: 'set', key: 'testKey', value: 'testValue' })
      let has = store({ method: 'has', key: 'testKey' })
      let res = store({ method: 'getAll' })
      expect(res).toEqual({ testKey: 'testValue' })
      expect(has).toBe(true)
    })
    test('test set undefined', () => {
      let res = store({ method: 'set', key: 'testKey' })
      expect(res).toBe(undefined)
    })
  })
})
