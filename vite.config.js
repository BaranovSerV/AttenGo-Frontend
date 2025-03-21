import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'ultimately-talented-louse.ngrok-free.app', // Новый ngrok хост
      'localhost',
      '0.0.0.0',
    ],
  },
})
