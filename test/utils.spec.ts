import { serialize, deserialize, extend } from '../src/helps'

describe('util', () => {
  describe('transform string', () => {
    test('should be a string', () => {
      const a = { key: 1 }
      expect(serialize(a)).toBe('{"key":1}')
    })
    test('should be a object', () => {
      const a = '{"key":1}'
      expect(deserialize(a)).toStrictEqual({ key: 1 })
    })
    test('should return undefined', () => {
      const a = ''
      expect(deserialize(a)).toBe(undefined)
    })
  })
  describe('should be mixed', () => {
    test('should be mutable', () => {
      const a = Object.create(null)
      const b = { foo: 123 }

      extend(a, b)

      expect(a.foo).toBe(123)
    })
  })
})
