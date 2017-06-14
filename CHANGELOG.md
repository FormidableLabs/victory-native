# VictoryNative Changelog

## 0.10.1 (2017-06-13)

- Peg `react` to exact alpha version, `16.0.0-alpha.12`. 

## 0.10.0 (2017-06-08)

- Fixes animations on VictoryLine and VictoryArea. Requires upgrades to `react`, `react-native`, `react-native-svg`.

## 0.9.0 (2017-05-26)

- VictoryCursorContainer, dep upgrades, remove VictoryZoom + VictoryVoronoiTooltip

## 0.8.2 (2017-05-08)

- Allows animations on Android (fixed in `react-native-svg`)

## 0.8.1 (2017-05-05)

- Fixes synthetic event reuse error in VictoryZoomContainer

## 0.8.0 (2017-04-20)

- Adds VictoryVoronoiContainer, VictorySelectionContainer, VictoryZoomContainer, VictoryBrushContainer

## 0.7.2 (2017-04-06)

- Fixes VictoryLine and VictoryArea animations

## 0.7.1 (2017-04-04)

- Upgrades Victory dependencies
- Fixes demos and hot reloading
- Removes OS-specific font

## 0.7.0 (2017-03-19)

- Removes victory-chart-native, victory-pie-native, victory-core-native
- Depends directly on victory-chart and victory-pie (victory-core was already a dep)
- Upgrades to `react-native@~0.42.0` and `react-native-svg@^5.1.5`
- Fixes broken demos

## 0.6.0 (2016-12-15)

- Changes how transitions and animations operate for continuous data
- Adds support for className in primitive components
- Moves react and react-native to peerDependencies

## 0.5.0 (2016-11-29)

- Adds support for VictoryZoom

## 0.4.0 (2016-10-18)

- Adds support for VictoryPortal
- Exports primitive components directly from Victory

## 0.3.0 (2016-09-18)

- Adds support for VictoryTooltip
- Adds support for VictoryVoronoi
- Adds support for VictoryVoronoiTooltip
- Portal pattern for tooltips is *not* supported in this release

## 0.2.0 (2016-08-22)

- **Moves `react-native-svg` to `peerDependencies`**
- Adds support for `clipPath`
- Updates all dependencies

## 0.1.1 (2016-08-01)

- Fix demos

## 0.1.0 (2016-08-01)

- Initial Release
