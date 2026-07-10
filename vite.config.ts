import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: v produkci (GitHub Pages) běží web na podcestě /jakub-simansky-web/,
// při lokálním vývoji na kořeni "/".
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/jakub-simansky-web/' : '/',
  plugins: [react()],
}))
