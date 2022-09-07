// vite.config.js
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import preact from '@preact/preset-vite'
import VitePluginStyleInject from 'vite-plugin-style-inject'
import { ViteAliases } from 'vite-aliases'
import path from 'node:path'

export default defineConfig({
  plugins: [
    ViteAliases() as Plugin,
    preact(),
    dts({
      insertTypesEntry: true,
    }),
    VitePluginStyleInject(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'UIKit',
      formats: ['es', 'umd'],
      fileName: (format) => `ui-kit.${format}.js`,
    },
    rollupOptions: {
      external: ['preact', 'react', 'react-dom', 'classnames/tailwind'],
      output: {
        globals: {
          preact: 'Preact',
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
