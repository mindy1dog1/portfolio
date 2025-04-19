import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensure .jsx and .tsx are included
  },
  plugins: [
     react(),
     tailwindcss(),

    ],
    base: "/portfolio",
    assetsInclude: ['**/*.glb', '**/*.gltf']
  })