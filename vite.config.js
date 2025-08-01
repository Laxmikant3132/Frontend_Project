import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: ' https://backend-project-un5v.onrender.com',
        changeOrigin: true,
      }
    }
  }
})
