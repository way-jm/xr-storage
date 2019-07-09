// 字符化
export function serialize(val: any) {
  return JSON.stringify(val)
}

// 反字符化
export function deserialize(val: string) {
  try {
    return JSON.parse(val)
  } catch (e) {
    return val || undefined
  }
}

// 混合对象
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
