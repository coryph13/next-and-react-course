// const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import type { Config } from "tailwindcss";

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config) ;
