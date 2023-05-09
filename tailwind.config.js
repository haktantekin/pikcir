/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    debugScreens: {
      position: ['top', 'left']
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
    },
    extend: {
      fontFamily: {
        "pt": ['PT Sans, sans-serif'],
        "black": ['Palanquin Dark, sans-serif'],
      },
      colors:{
      '202124':'#202124',
      'eeedfd': '#eeedfd',
      'f07167':'#f07167',
      'e5e5e5': '#e5e5e5',
      '003049': '#003049',
      }
    },
  },
  plugins: [
  ],
}
