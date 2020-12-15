module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "https://www.photopea.com"
    },
    testMatch: [
        "**/test/**/*.test.js"
    ],
    verbose: true,
    collectCoverage: false
}