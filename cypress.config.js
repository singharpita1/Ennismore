const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: 'https://www.amazon.co.uk',
        defaultCommandTimeout: 5000,
        pageLoadTimeout: 10000,
        specPattern: 'cypress/tests/**/*.cy.js',
        supportFile: 'cypress/support/e2e.js',
        downloadsFolder: 'cypress/downloads/',
        video: true,
        videosFolder: 'cypress/results/videos',
        screenshotsFolder: 'cypress/results/screenshots',
    },
});