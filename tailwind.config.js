/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        showDown: {
          '0%': { transform: 'translateY(-1rem)', opacity: '0' },
          '100%': {transform: 'translateY(0)', opacity: '1'}
        },
        Animation: {
          showDown: 'showDown ease-in-out .4s',
        }
      }
    },
    fontFamily: {
      'body': ['Poppins', 'sans serif']
    }
  },
  plugins: [],
}
