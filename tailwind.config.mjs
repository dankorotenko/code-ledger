/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      }
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      mont: ["Montserrat", "sans-serif"],
    },
    colors: {
      text: '#FDFDFD',
      textAccent: '#999EC0'
    }
  },
  plugins: [],
};
