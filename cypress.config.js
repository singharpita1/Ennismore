const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
    e2e: {
        async setupNodeEvents(on, config) {
            // implement node event listeners here

            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });

            on("file:preprocessor", bundler);
            await addCucumberPreprocessorPlugin(on, config);

            return config;
        },
        baseUrl: 'https://www.amazon.co.uk',
        retries: 1,
        defaultCommandTimeout: 10000,
        pageLoadTimeout: 10000,
        specPattern: 'cypress/tests/**/*.feature',
        supportFile: 'cypress/support/e2e.js',
        downloadsFolder: 'cypress/downloads/',
        excludeSpecPattern: "cypress/tests/spec.cy.js",
        experimentalSessionAndOrigin: true,
        experimentalModifyObstructiveThirdPartyCode: false,
        chromeWebSecurity: false,
        video: true,
        videosFolder: 'cypress/results/videos',
        screenshotsFolder: 'cypress/results/screenshots',
    },
});