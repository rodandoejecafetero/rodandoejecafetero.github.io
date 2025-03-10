import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Carga las variables de entorno definidas en .env, .env.development, etc.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()],
    base: env.VITE_BASE_PATH || '/', //'/rodandoporeleje/',
    build: {
      target: 'es2019',
    },
  };
});
