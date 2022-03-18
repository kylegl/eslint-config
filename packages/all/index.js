module.exports = {
  extends: [
    '@kylegl/eslint-config-react',
    '@kylegl/eslint-config-vue',
  ],
  plugins: ['testing-library'],
  rules: {
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": "off"
  },
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      "files": ["**/tests/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      "extends": ["plugin:testing-library/vue"]
    },
  ],
}
