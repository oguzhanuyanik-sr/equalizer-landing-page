/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      blue: '#66E2DC',
      orange: '#FA7453',
      lightOrange: '#FFB964',
      white: '#FCFAF9',
      dark: '#191826',
    },
    fontFamily: {
      plex: ['IBM Plex Sans', 'sans-serif'],
    },
    extend: {},
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
