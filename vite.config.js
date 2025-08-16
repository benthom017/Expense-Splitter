import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      // Add your Replit hostname(s) here if needed
      // "your-repl-name.username.repl.co"
    ],
    proxy: {
      // Forward API calls to your server repl (replace URL)
      '/api': {
        target: 'https://YOUR-SERVER-REPL-URL',
        changeOrigin: true,
        secure: false
      }
    }
  }
})