// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import preact from '@preact/preset-vite'
import VitePluginStyleInject from 'vite-plugin-style-inject'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    preact(),
    dts({
      insertTypesEntry: true,
    }),
    VitePluginStyleInject(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui-kit',
      // the proper extensions will be added
      fileName: 'ui-kit',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['preact', 'react', 'classnames/tailwind'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          preact: 'Preact',
        },
      },
    },
  },
})
