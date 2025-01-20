import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ['"Fira Code"', 'monospace'],
        roboto: ['Roboto', 'sans-serif'], 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'white': '#ffffff',
        'black': '#181818',	
        'dark-gray': '#181818',
        'soft-black': '#121212'
      },
      dropShadow: {
        'glow': '0 35px 35px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config;
