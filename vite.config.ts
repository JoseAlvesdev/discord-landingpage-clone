import { defineConfig } from 'vite'
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  base: '/discord-landingpage-clone/',
  plugins: [
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: i => `__tla_${i}`
    })
  ]
});