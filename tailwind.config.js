/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#091217', // New brand color
          light: '#1a2830',
        },
        secondary: {
          DEFAULT: '#9ca1a4', // New accent color
          dark: '#7a7f82',
        },
        accent: {
          DEFAULT: '#9ca1a4',
          light: '#b8bdbf',
          dark: '#7a7f82',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};