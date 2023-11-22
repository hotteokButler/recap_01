/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  	"./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      padding : {
        '0.7%' :'0.7%',
        '1%' :'1%',
        '2%' :'2%',
        '3%' :'3%',
        '5%' :'5%',
      },
      fontSize : {
        'xxs' : "10px"
      },
      lineHeight: {
        '11' : "44px"
      }
    },
  },
  plugins: [],
}