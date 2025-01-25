import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'blink': {
          '50%': { backgroundColor: '#1f1f1f' },
          '100%': { backgroundColor: '#151515' },
        },
      },
      animation: {
        'blink-once': 'blink 1s ease-in-out forwards',
      },
      fontFamily: {
        fira: ['"Fira Code"', 'monospace'],
        roboto: ['Roboto', 'sans-serif'], 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'white': '#ffffff',
        'deep-dark': '#0a0a0a',
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
