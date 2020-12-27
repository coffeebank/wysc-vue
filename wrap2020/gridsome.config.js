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
        sheetId: process.env.googleSheetId, 
        apiKey: process.env.googleSheetApiKey,
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
