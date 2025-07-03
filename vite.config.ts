import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
  ],

  server: {
    port: 3000,
  },
})
