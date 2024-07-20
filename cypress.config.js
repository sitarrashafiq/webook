const { defineConfig } = require('cypress')
//Cypress.config('chromeWebSecurity', false);
module.exports = defineConfig({
  viewportHeight:1000,
  viewportWidth:1920,
  e2e: {
    baseUrl: 'https://webook.com/en',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern:['**/1-getting-started/*','**/2-advanced-examples/*'],
    chromeWebSecurity: false,
    defaultCommandTimeout: 120000,
    video: false,
    screenshotsFolder: "cypress/screenshots",
    browser: "chrome",
    watchForFileChanges: true
  },
})