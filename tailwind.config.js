/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // Config Colors
    colors:{
      'Red' : 'hsl(1, 90%, 64%)',
      'Blue' : 'hsl(219, 85%, 26%)',
      'White' : 'hsl(0, 0%, 100%)',
      'Very-light-grayish-blue' : 'hsl(210, 60%, 98%)',
      'Light-grayish-blue-1' : 'hsl(211, 68%, 94%)',
      'Light-grayish-blue-2' : 'hsl(205, 33%, 90%)',
      'Grayish-blue' : 'hsl(219, 14%, 63%)',
      'Dark-grayish-blue' : 'hsl(219, 12%, 42%)',
      'Very-dark-blue' : 'hsl(224, 21%, 14%)',
    },
    //  Config Screens 
    screens: {
      'sm': '375',
      // => @media (min-width: 640px) { ... }
      'xl': '1440',
      // => @media (min-width: 1440px) { ... }
      'tall': { 'raw': '(max-height: 800px)' },
      // => @media (min-height: 800px) { ... }
    
    },  
    //Config font
    fontFamily:{
      custom:["PlusJakartaSans", "sans-serif"],
    },
    extend: {
    },
  },
  plugins: [],
}