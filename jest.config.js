module.exports = {
    roots: ["<rootDir>/src"],
    collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/**/*.test.js"],
    setupFiles: ["<rootDir>/node_modules/react-app-polyfill/jsdom.js"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    testMatch: ["<rootDir>/src/tests/*_hidden.test.{js,jsx}"],
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(js|jsx|mjs|cjs)$": "<rootDir>/node_modules/react-scripts/config/jest/babelTransform.js",
      "^.+\\.css$": "<rootDir>/node_modules/react-scripts/config/jest/cssTransform.js",
      "^(?!.*\\.(js|jsx|mjs|cjs|css|json)$)": "<rootDir>/node_modules/react-scripts/config/jest/fileTransform.js",
    },
    transformIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs)$",
      "^.+\\.module\\.(css|sass|scss)$",
    ],
    moduleNameMapper: {
      "^react-native$": "react-native-web",
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    },
    moduleFileExtensions: [
      "web.js",
      "js",
      "web.jsx",
      "jsx",
      "json",
      "node",
    ],
    watchPlugins: [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname",
    ],
    reporters: [["<rootDir>/src/tests/test-reporter/index.js", { useReporter: true }]],
  };
