import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/react-actions-test/', // base path 설정 (GitHub Pages에 맞게 수정)
});
