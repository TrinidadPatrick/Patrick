import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        themeDarkest : '#0f0f0f',
        themeDark: '#1a1a1a',
        themeSecondary: '#7c58ed',
        themeWhite : '#FFFFFF',
      }
      ,
      screens : {
        extraSm : '400px',
        semiextraSm: '450px',
        semiMd : '950px',
        semiSm : '500px'
      },
      fontSize : {
        'extraXs' : '0.65rem'
      }
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

