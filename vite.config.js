import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/react-actions-test/',
  esbuild: {
    loader: 'jsx', // .js 파일에서 JSX 처리
    include: /src\/.*\.js$/, // src 디렉토리 내 .js 파일을 JSX로 처리
  },
});
