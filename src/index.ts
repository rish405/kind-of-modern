const toString = Object.prototype.toString

export type Kind =
  | 'string'
  | 'number'
  | 'boolean'
  | 'symbol'
  | 'bigint'
  | 'function'
  | 'array'
  | 'date'
  | 'regexp'
  | 'error'
  | 'map'
  | 'set'
  | 'weakmap'
  | 'weakset'
  | 'null'
  | 'undefined'
  | 'promise'
  | 'typedarray'
  | 'buffer'
  | 'object'

export function kindOf(value: unknown): Kind {
  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(value)) return 'buffer'
  if (ArrayBuffer.isView(value)) return value instanceof DataView ? 'object' : 'typedarray'
  switch (toString.call(value)) {
    case '[object String]':
      return 'string'
    case '[object Number]':
      return 'number'
    case '[object Boolean]':
      return 'boolean'
    case '[object Symbol]':
      return 'symbol'
    case '[object BigInt]':
      return 'bigint'
    case '[object Function]':
      return 'function'
    case '[object Array]':
      return 'array'
    case '[object Date]':
      return 'date'
    case '[object RegExp]':
      return 'regexp'
    case '[object Error]':
      return 'error'
    case '[object Map]':
      return 'map'
    case '[object Set]':
      return 'set'
    case '[object WeakMap]':
      return 'weakmap'
    case '[object WeakSet]':
      return 'weakset'
    case '[object Null]':
      return 'null'
    case '[object Undefined]':
      return 'undefined'
    case '[object Promise]':
      return 'promise'
    default:
      return 'object'
  }
}

export default kindOf

