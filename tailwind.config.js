export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'bg-yellow',
    'text-yellow',
    'bg-purple',
    'text-purple',
    'bg-green',
    'text-green',
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
