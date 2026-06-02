import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// En producción la web se sirve bajo /aniversario/ (GitHub Pages).
// En desarrollo se mantiene en / para no romper el servidor local.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/aniversario/" : "/",
  plugins: [react()],
}))
