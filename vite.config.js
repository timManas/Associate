import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
// export default defineConfig({
//   base: './',

//   plugins: [react(), eslint()],
// })

export default defineConfig({
  plugins: [react()],
  server: {
    // proxy requests prefixed '/api' and '/uploads'
    proxy: {
      // '/': 'https://localhost:5000',
      // '/api': 'https://localhost:5000',
      // '/uploads': 'https://localhost:5000',
    },
  },
})
