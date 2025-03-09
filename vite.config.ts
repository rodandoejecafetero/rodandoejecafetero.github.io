import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', //'/rodandoporeleje/',
  build: {
    target: 'es2019', // o 'chrome80'
  },
});
