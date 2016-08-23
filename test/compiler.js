var fs = require("fs");
var babel = require("babel-core");
var origJs = require.extensions[".js"];

// Mock react-native and react-native-svg
require("react-native-mock/mock");
require("react-native-svg-mock/mock");

// Compile a path with babel
var compile = function (fileName) {
  var src = fs.readFileSync(fileName, "utf8");
  var output = babel.transform(src, {
    filename: fileName
  }).code;
  return output;
}

// We need to compile a few node_modules
var shouldCompile = function (fileName) {
  var should = [
    "node_modules/victory-chart",
    "node_modules/victory-chart-native",
    "node_modules/victory-core",
    "node_modules/victory-core-native",
    "node_modules/victory-pie",
    "node_modules/victory-pie-native",
  ].some(function (mod) {
    return fileName.indexOf(mod) >= 0;
  });
  return should;
};

// Babel compile things not in node_modules
require.extensions[".js"] = function (module, fileName) {
  if (shouldCompile(fileName) || fileName.indexOf("node_modules/") === -1) {
    return module._compile(compile(fileName), fileName);
  }
  return origJs(module, fileName);
};
