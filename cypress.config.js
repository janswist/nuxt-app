const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: 'http://192.168.1.38:3000/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});