import { Bench } from 'tinybench'
import modern from '../dist/index.mjs'
import kindOfLegacy from 'kind-of'

const values = [
  'x',
  42,
  true,
  Symbol('s'),
  1n,
  () => {},
  [],
  new Date(),
  /x/,
  new Error('oops'),
  new Map(),
  new Set(),
  new WeakMap(),
  new WeakSet(),
  null,
  undefined,
  Promise.resolve(1),
  new Uint8Array(4),
  Buffer.from('a'),
  {}
]

const bench = new Bench({ time: 1000, iterations: 1 })

bench.add('kind-of-modern', () => {
  for (const v of values) modern(v)
})

bench.add('kind-of (legacy)', () => {
  for (const v of values) kindOfLegacy(v)
})

await bench.run()

console.table(bench.table())

