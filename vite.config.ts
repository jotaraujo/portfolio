import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

// https://vite.js.org/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
});
