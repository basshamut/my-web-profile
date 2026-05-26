import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jesusfajardo.dev',
  vite: {
    build: { target: 'esnext' }
  }
});
