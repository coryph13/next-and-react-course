import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import colors from 'tailwindcss/colors';
// const colors = require('tailwindcss/colors.js');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss({
    theme: {
        extend: {
            colors: {
                ...colors
            }
        }
    }
  })],
});
                