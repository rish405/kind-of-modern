# kind-of-modern

Tiny, zero-dependency utility that returns the lowercase type of any JavaScript value. Modern, cross‑realm safe, and Node + browser compatible.

## Install

```bash
npm i kind-of-modern
```

## Usage

```ts
import kindOf from 'kind-of-modern'

kindOf('hello') // 'string'
kindOf(123) // 'number'
kindOf(true) // 'boolean'
kindOf(Symbol('x')) // 'symbol'
kindOf(1n) // 'bigint'
kindOf(() => {}) // 'function'
kindOf([]) // 'array'
kindOf(new Date()) // 'date'
kindOf(/re/) // 'regexp'
kindOf(new Error('oops')) // 'error'
kindOf(new Map()) // 'map'
kindOf(new Set()) // 'set'
kindOf(new WeakMap()) // 'weakmap'
kindOf(new WeakSet()) // 'weakset'
kindOf(null) // 'null'
kindOf(undefined) // 'undefined'
kindOf(Promise.resolve()) // 'promise'
kindOf(new Uint8Array()) // 'typedarray'
kindOf(Buffer.from('x')) // 'buffer' (Node)
kindOf({}) // 'object'
```

Named export is also available:

```ts
import { kindOf } from 'kind-of-modern'
```

## Why modern?

- Uses `Object.prototype.toString` (respects `Symbol.toStringTag`) for accurate, cross‑realm detection.
- Detects Node `Buffer` and groups all TypedArray variants under `typedarray`.
- Strict TypeScript types and ESM + CJS builds with auto `.d.ts`.

## API

```ts
type Kind =
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
```

## Benchmarks

```bash
npm run bench
```

This will build the package and run a micro‑benchmark comparing against the legacy `kind-of` package.

## Publishing

- ESM + CJS: `exports`, `main`, and `module` are set.
- Types: `.d.ts` is emitted automatically.
- Size: minified build stays under 2KB.

