/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '0px',
      'tablet': '1024px',
      'pc': '1440px'
    },
    colors: {
      links: 'hsl(228, 45%, 44%)',
      
      // Primary colors
      tomato: 'hsl(4, 100%, 67%)',

      // Neutral colors
      darkGrey: 'hsl(235, 18%, 26%)',
      charcoalGrey: 'hsl(234, 29%, 20%)',
      grey: 'hsl(231, 7%, 60%)',
      white: 'hsl(0, 0%, 100%)',

      // Gradient colors
      startingColor: '#e64e71',
      middleColor: '#e7585e',
      endingColor: '#e7633e'
    },

    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    width: {
      '90%': '90%',
      '375': '375px',
    },
    
    extend: {},
  },
  plugins: [],
}

