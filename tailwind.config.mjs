/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f0ff',
          purple: '#b026ff',
          pink: '#ff2d95',
          green: '#39ff14',
        },
        dark: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a2e',
          600: '#22223a',
        },
      },
      fontFamily: {
        gaming: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};