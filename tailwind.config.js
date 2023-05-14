/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      header: 'Archivo',
    },
    extend: {
      colors: {
        backSecond: '#f6f2ea',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate(-15px)' },
          '50%': { transform: 'translate(15px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle .5s ease-in-out 1',
      },
    },
  },
  plugins: [],
};
