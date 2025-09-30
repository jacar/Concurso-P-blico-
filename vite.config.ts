import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    define: {
      'process.env': {
        API_KEY: JSON.stringify(env.GEMINI_API_KEY || ''),
        GEMINI_API_KEY: JSON.stringify(env.GEMINI_API_KEY || '')
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      sourcemap: true
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      open: true
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom']
    },
    publicDir: 'public',
    envPrefix: 'VITE_'
  };
});
