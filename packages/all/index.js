module.exports = {
  extends: [
    '@kylegl/eslint-config-react',
    '@kylegl/eslint-config-vue',
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:testing-library/vue"
  ],
  plugins: ["jest"],
  env: {
    "jest/globals": true
  },
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      "files": ["**/tests/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      "extends": ["plugin:testing-library/vue"]
    },
  ],
}

