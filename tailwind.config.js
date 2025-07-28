/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./css/**/*.css",
    "./js/**/*.js",
    "./mysong/**/*.html",
    "./projekUTS/**/*.html",
    "./cv/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'teal': {
          400: '#14b8a6',
          500: '#0d9488'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  corePlugins: {
    preflight: true,
  }
}