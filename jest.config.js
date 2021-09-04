module.exports = {
    testEnvironment: `jsdom`,
    transform: {
      "^.+\\.(js|jsx|tsx|ts)$": `./jest-preprocess.js`,
    },
    moduleNameMapper: {
      ".+\\.(css|styl|less|sass|scss)$": `<rootDir>/__mocks__/style-mock.js`,
      ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
      __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    setupFiles: [`./loadershim.js`],
    setupFilesAfterEnv: ["./setup-test-env.js"],
}