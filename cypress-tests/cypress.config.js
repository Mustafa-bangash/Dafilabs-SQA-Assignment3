const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://myportfolioprojecttask.netlify.app',
    video: true,                  // ✅ records video of every run
    screenshotOnRunFailure: true, // ✅ auto screenshot on failure
    setupNodeEvents(on, config) {
      // no custom node events needed for now
    },
  },
});