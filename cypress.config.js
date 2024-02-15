// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
    
//     setupNodeEvents(on, config) 
//     {
//       // implement node event listeners here
//     },
//   },
// });

const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const fs = require("fs");

module.exports = defineConfig({
  projectId: "WeWork",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("file:preprocessor", cucumber());
      // require("@cypress/grep/src/plugin")(on);
      // on("after:spec", (spec, results) => {
      //   if (results && results.video) {
      //     // Do we have failures for any retry attempts?
      //     const failures = results.tests.some((test) =>
      //       test.attempts.some((attempt) => attempt.state === "failed"),
      //     );
      //     if (!failures && fs.existsSync(results.video)) {
      //       // delete the video if the spec passed and no tests retried
      //       fs.unlinkSync(results.video);
      //     }
      //   }
      // });
      //return require("./cypress/support/tasks.js")(on);
    },
    baseUrl: "https://www.webpagetest.org/",
    specPattern: [
      "cypress/Cucumber_Tests/Steps/Workspace2.spec.js",
      "cypress/Cucumber_Tests/Workspace.feature",

    ],
    viewportHeight: 720,
    viewportWidth: 1280,
    video: true,
    experimentalStudio: true
  },
});

