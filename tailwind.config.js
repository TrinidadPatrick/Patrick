/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        themeBlue : '#0B1324',
        themeGreen : '#2FD1A9',
        themeWhite : '#FFFFFF'
      }
    },
  },
  plugins: [],
}

