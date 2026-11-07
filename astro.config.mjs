import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jasonwiker.ca',
  trailingSlash: 'always',
  devToolbar: {
    enabled: false,
  },
  build: {
    format: 'directory',
  },
  vite: {
    server: {
      host: '127.0.0.1',
      port: 4321,
    },
  },
});
