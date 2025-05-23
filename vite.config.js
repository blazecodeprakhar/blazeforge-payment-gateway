import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/blazeforge-payment-gateway/', // MUST MATCH your GitHub repo name
  plugins: [react()]
})
