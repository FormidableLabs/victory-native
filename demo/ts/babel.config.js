const path = require("path");

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          // eslint-disable-next-line no-undef
          "victory-native": path.join(__dirname, "../../lib")
        }
      }
    ]
  ]
};
