import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true
  },
  base: '/front-end-ssr-editor/',
  test: {
    environment: "jsdom",
    globals: true,
    css: true,
    setupFiles: "./setup.js",
    coverage: {
      provider: 'istanbul',
    }
  }
})
