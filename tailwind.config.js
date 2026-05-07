/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bodegon-crema': '#aa9a79', 
        'bodegon-rojo': '#7f1d1d', 
        'primary': '#1c1917',
        'accent': '#b45309',
      },
    },
  },
  plugins: [],
}