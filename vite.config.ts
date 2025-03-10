import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()],
    base: env.VITE_BASE_PATH || '/', //'/rodandoporeleje/',
    build: {
      target: 'es2019',
    },
  };
});
