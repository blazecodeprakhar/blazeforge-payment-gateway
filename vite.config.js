import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/blazeforge-payment-gateway/', // VERY IMPORTANT for GitHub Pages
})
