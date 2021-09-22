module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    extend: {

        screens: {
          vsm: '500px',
        },     
        colors:{
          coolblack: '#023047',
          coollightblue: '#8ecae6',  
          coolyellow: '#ffb703',
          coolorange: '#fb8500'
        },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }