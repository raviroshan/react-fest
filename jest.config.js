module.exports = {
  displayName: 'React-Fest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.scss$': require.resolve('./test/style-mock.js')
  },
  setupTestFrameworkScriptFile: require.resolve('./test/setup-localstorage.js')
};
