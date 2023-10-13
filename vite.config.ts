import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, './src/assets/images'),
    },
  },
  plugins: [react()],
})
