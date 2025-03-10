export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'bg-yellow',
    'text-yellow',
    'bg-purple',
    'text-purple',
    'bg-green',
    'text-green',
    'bg-dark-green',
    'text-dark-green',
    'bg-pink',
    'text-pink',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
