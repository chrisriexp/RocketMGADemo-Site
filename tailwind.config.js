/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
      'custom-blue': '#5080C7',
      'custom-red': '#FD0000',
      'custom-gray': '#4c4c4c',
      'custom-light-blue': '#EFF3F6',
      "custom-light-gray": '#A4B0B9',
      'custom-cream': '#FAFAFA'
      },
      boxShadow: {
      'newdrop': '0 4px 50px #00000040;',
      'buttondrop': 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('flowbite/plugin')
],
}