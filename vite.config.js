import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // firebase.json serves the "build" directory (CRA's old output dir),
    // so keep emitting there instead of Vite's default "dist".
    outDir: 'build',
  },
  server: {
    // Same port CRA used.
    port: 3000,
  },
});
