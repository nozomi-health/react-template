const {colors: defaultColors} = require('tailwindcss/defaultTheme');
const colorVariable = require('@mertasan/tailwindcss-variables/colorVariable')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        /*
         can add new custom colors here
         ...{
          'primary': colorVariable('var(--colors-primary)'),
        }
        */
      },
      variables: {
        DEFAULT: {
          colors: {
            'primary': '#FCB96B', // example
          }
        }
      },
      fontFamily: {
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@mertasan/tailwindcss-variables')({
      colorVariables: true
    })
  ],
}
