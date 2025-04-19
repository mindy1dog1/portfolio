import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

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
  assetsInclude: ['**/*.glb', '**/*.gltf'],

  // ⬇️ MISSING COMMA WAS HERE before "build:"
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@react-three")) return "three-vendor";
            if (id.includes("three")) return "three-core";
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1500, // optional: raise the warning limit
  },
});
