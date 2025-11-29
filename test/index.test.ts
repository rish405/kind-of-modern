import { describe, it, expect } from 'vitest'
import kindOf from '../src/index'

describe('kindOf', () => {
  it('handles primitives', () => {
    expect(kindOf('a')).toBe('string')
    expect(kindOf(new String('a'))).toBe('string')
    expect(kindOf(1)).toBe('number')
    expect(kindOf(new Number(1))).toBe('number')
    expect(kindOf(NaN)).toBe('number')
    expect(kindOf(true)).toBe('boolean')
    expect(kindOf(new Boolean(false))).toBe('boolean')
    expect(kindOf(Symbol('s'))).toBe('symbol')
    expect(kindOf(1n)).toBe('bigint')
    expect(kindOf(() => {})).toBe('function')
  })

  it('handles core objects', () => {
    expect(kindOf([])).toBe('array')
    expect(kindOf(new Date())).toBe('date')
    expect(kindOf(/x/)).toBe('regexp')
    expect(kindOf(new Error('oops'))).toBe('error')
    expect(kindOf(new Map())).toBe('map')
    expect(kindOf(new Set())).toBe('set')
    expect(kindOf(new WeakMap())).toBe('weakmap')
    expect(kindOf(new WeakSet())).toBe('weakset')
  })

  it('handles null and undefined', () => {
    expect(kindOf(null)).toBe('null')
    expect(kindOf(undefined)).toBe('undefined')
  })

  it('handles promise', () => {
    expect(kindOf(Promise.resolve(1))).toBe('promise')
  })

  it('handles typed arrays and buffer', () => {
    expect(kindOf(new Uint8Array(2))).toBe('typedarray')
    expect(kindOf(new Float64Array(2))).toBe('typedarray')
    const buf = Buffer.from('x')
    expect(kindOf(buf)).toBe('buffer')
  })

  it('handles plain objects', () => {
    expect(kindOf({})).toBe('object')
    const obj = Object.create(null)
    expect(kindOf(obj)).toBe('object')
  })

  it('handles DataView as object (not typedarray)', () => {
    const dv = new DataView(new ArrayBuffer(8))
    expect(kindOf(dv)).toBe('object')
  })
})

