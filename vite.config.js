import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true
  },
  // base: '/front-end-ssr-editor/',
  base: process.env.NODE_ENV === 'production' ? '/front-end-ssr-editor/' : '/',
  test: {
    environment: "jsdom",
    globals: true,
    css: true,
  }
})