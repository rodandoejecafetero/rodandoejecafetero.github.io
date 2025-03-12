export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'bg-yellow',
    'text-yellow',
    'bg-purple',
    'text-purple',
    'bg-green',
    'text-green',
    'border-green',
    'bg-dark-green',
    'text-dark-green',
    'border-dark-green',
    'bg-pink',
    'text-pink',
    'bg-dark-pink',
    'text-dark-pink',
    'bg-orange',
    'text-orange',
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
