import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: './src/main.jsx',
    },
    outDir: './dist',
  },
  plugins: [react()],
});
