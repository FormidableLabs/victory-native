const path = require("path");
const blacklist = require("metro-bundler").createBlacklist;

module.exports = {
  getProjectRoots() {
    return this._getRoots();
  },

  getBlacklistRE() {
    return blacklist([
      /demo\/node_modules\/react-native\/.*/,
      /demo\/node_modules\/react-native-svg\/.*/
    ]);
  },

  _getRoots() {
    // eslint-disable-next-line no-undef
    return [path.resolve(__dirname, "demo"), path.resolve(__dirname)];
  }
};
