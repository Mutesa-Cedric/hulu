/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens:{
        "3xl":"2000px"
      },
      colors:{
        'green-primary':"#1CE783",
        'green-secondary':"#00ed82",
        "gray-primary":"#323843"
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
