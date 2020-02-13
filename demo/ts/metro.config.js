/* eslint-disable no-undef */
const path = require("path");
const pkg = require("../../package.json");

const providesModuleNodeModules = Object.keys(pkg.dependencies).concat([
  "@babel/runtime",
  "react",
  "react-native",
  "react-native-svg"
]);

module.exports = {
  projectRoot: __dirname,
  watchFolders: [path.resolve(__dirname, "../../lib")],
  resolver: {
    providesModuleNodeModules
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  }
};
