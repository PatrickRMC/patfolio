module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    colors:{
      coolblack: '#023047',
      coollightblue: '#8ecae6',  
      coolyellow: '#ffb703',
      coolorange: '#fb8500'
    },
    extend: {
      animation: {
        'bounce-fast': 'bounce 0.5s linear infinite',
      },
      backgroundImage: theme => ({
        'game-gif': "url('/src/background.gif')"
       })
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }