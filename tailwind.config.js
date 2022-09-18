/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/*.{html, js}'],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      },
      colors: {
        bg: {
          "clr-1": "rgba(0, 0, 0, 0.4)"
        }
      },
      transitionTimingFunction: {
        'wave': "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      }
    },
  },
  plugins: [],
}