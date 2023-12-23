/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
     'container':'1603px'
      },
      fontFamily: {
      sans:['DM Sans'],
      },
      colors: {
      secondaryColor:'#767676',
      primaryColor:'#262626',
      'subBg':'#F5F5F3',
      'subBorder':'#979797',
      'subSearch':'#C4C4C4',
      
      },
    },
  },
  plugins: [],
}

