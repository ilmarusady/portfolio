/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      colors:{
        basic : '#12a4d9',
        primary : '#ffb800', // 14b8a6
        secondary : '#64748b', 
        third : '#f1f5f9',
        dark : '#0f172a',
      },
      screen : {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

