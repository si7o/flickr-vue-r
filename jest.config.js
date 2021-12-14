module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  transformIgnorePatterns: ["node_modules"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  coverageReporters: ["json", "html"],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40,
    },
  },
  collectCoverageFrom: ["src/**/*.{js,vue}"],
  modulePathIgnorePatterns: ["mocks.js", "testing", ".history", ".disabled"],
};
