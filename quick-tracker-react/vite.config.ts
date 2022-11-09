import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // host: false,
    port: 3000
  },
  plugins: [react()]
})
