module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "<rootDir>/test/mocks/styleMock.js",
    "\\.(png|jpe?g|gif|webp|svg)$": "<rootDir>/test/mocks/fileMock.js"
  },
  testPathIgnorePatterns: ["<rootDir>/.cache/", "<rootDir>/public/"]
};
