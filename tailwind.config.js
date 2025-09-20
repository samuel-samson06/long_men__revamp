/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'background':'#2D1810'
      },
      colors: {
      primary: {
        900: '#2D1810',
        800: '#3E2318',
        700: '#4A2920',
      },
      gold: {
        600: '#B8860B',
        500: '#DAA520',
        400: '#F4A460',
      },
      neutral: {
        50: '#FEFDF9',
        100: '#F7F5F0',
        200: '#E8E2D5',
      },
    },
    fontFamily: {
      serif: ['"Playfair Display"', 'serif'],
      sans: ['Inter', 'sans-serif'],
    },
    },
  },
  plugins: [],
}
