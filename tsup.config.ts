import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dist',
  clean: true,
  minify: true,
  sourcemap: false,
  treeshake: true,
  outExtension: ({ format }) => (format === 'esm' ? { js: '.mjs' } : { js: '.cjs' }),
  target: 'es2020'
})

