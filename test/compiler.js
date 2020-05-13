
var fs = require("fs");
var babel = require("babel-core");
var origJs = require.extensions[".js"];
var metroPreset = require("metro-react-native-babel-preset");

// Mock react-native and react-native-svg
require("@jonny/react-native-mock/mock");
require("react-native-svg-mock/mock");

// Compile a path with babel
var compile = function (fileName) {
  var src = fs.readFileSync(fileName, "utf8");
  var output = babel.transform(src, {
    filename: fileName,
    babelrc: false,
    presets: [metroPreset]
  }).code;
  return output;
}

// We need to compile a few node_modules
var shouldCompile = function (fileName) {
  var should = [
    "node_modules/victory-area",
    "node_modules/victory-axis",
    "node_modules/victory-bar",
    "node_modules/victory-box-plot",
    "node_modules/victory-brush-container",
    "node_modules/victory-brush-line",
    "node_modules/victory-candlestick",
    "node_modules/victory-chart",
    "node_modules/victory-core",
    "node_modules/victory-create-container",
    "node_modules/victory-cursor-container",
    "node_modules/victory-errorbar",
    "node_modules/victory-group",
    "node_modules/victory-histogram",
    "node_modules/victory-legend",
    "node_modules/victory-line",
    "node_modules/victory-pie",
    "node_modules/victory-polar-axis",
    "node_modules/victory-scatter",
    "node_modules/victory-selection-container",
    "node_modules/victory-shared-events",
    "node_modules/victory-stack",
    "node_modules/victory-tooltip",
    "node_modules/victory-voronoi",
    "node_modules/victory-voronoi-container",
    "node_modules/victory-zoom-container"
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
