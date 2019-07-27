// See https://next.tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    extend: {
      colors: {
        'e6n-red': '#fa3939',
        'e6n-blue': '#1eadff',
        'e6n-yellow': '#ffd633',
        'e6n-green': '#5f9f34',
        'e6n-black': '#1a1f36'
      }
    }
  },
  variants: {
    margin: ['responsive', 'last-child']
  },
  plugins: [
    function({ addVariant, e }) {
      addVariant('last-child', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`last-child${separator}${className}`)}:last-child`
        })
      })
    }
  ]
};
