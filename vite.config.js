import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, writeFileSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-files',
      closeBundle() {
        copyFileSync('CNAME', 'dist/CNAME')
        writeFileSync('dist/.nojekyll', '')
      }
    }
  ],
  root: './app',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
