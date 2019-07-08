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
