// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Wrapped Wysc, 2020 Edition 🎁",
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: '1aO5OQv6-I7nYD32HE_uPZXqLbrcDL_MN9pNKWuWyUPk', 
        apiKey: 'AIzaSyB9Gp1sFzcmG35Z3OIupDmTxN_nUdXFB94',
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
      /**
      * These are the default options.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
      */
    },
  ],
  templates: {
    googleSheet: [
      {
        path: '/:id4',
        component: './src/templates/googleSheet.vue'
      }
    ]
  }
}
