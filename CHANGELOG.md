# VictoryNative Changelog

## 0.17.4 (2018-04-01)

-[292](https://github.com/FormidableLabs/victory-native/pull/292) Fixes a bug with polar line and area chart rendering

## 0.17.3 (2018-03-28)

-[289](https://github.com/FormidableLabs/victory-native/pull/289) Add `VictoryBoxPlot`

## 0.17.2 (2018-03-14)

-[277](https://github.com/FormidableLabs/victory-native/pull/277) Fixes a naming bug in `VictoryZoomContainer`

## 0.17.1 (2018-02-12)

-[258](https://github.com/FormidableLabs/victory-native/pull/258) Support `disable` prop on container components

## 0.17.0 (2018-02-06)

-[250](https://github.com/FormidableLabs/victory-native/pull/250) Refactors all primitive components and updates to `victory@0.25.2` dependencies. See [CHANGELOG](https://github.com/FormidableLabs/victory/blob/master/CHANGELOG.md#0250-2018-02-04).
   *Note: `VictoryBrushLine` is not implemented in `victory-native`*

## 0.16.6 (2018-01-03)

-[232](https://github.com/FormidableLabs/victory-native/pull/232) Import from victory-*/es instead of victory-*/src

## 0.16.5 (2017-12-20)

- [221](https://github.com/FormidableLabs/victory-native/pull/221) Fixes a bug with circular clipPaths

## 0.16.4 (2017-12-19)

- [215](https://github.com/FormidableLabs/victory-native/pull/215) Fixes a bug with press events and VictoryPortal

## 0.16.3 (2017-12-18)

- [214](https://github.com/FormidableLabs/victory-native/pull/214) Fixes bugs in `VictoryZoomContainer` and `VictoryContainer`

## 0.16.2 (2017-12-17)

- [203](https://github.com/FormidableLabs/victory-native/pull/203) Transform parsing for `react-native-svg@6.0.1-rc.1`. **requires `react-native-svg@6.0.1-rc.1`**

## 0.16.1 (2017-11-14)

- [180](https://github.com/FormidableLabs/victory-native/pull/180) Fix unsupported style bug
- [181](https://github.com/FormidableLabs/victory-native/pull/181) Fix container styles

VictoryCore
- [316] (https://github.com/FormidableLabs/victory-core/pull/316)
  - adds `cornerRadius` prop for `Bar`
  - adds `barRatio` prop for `Bar`
  - removes rounding from calculated paths
  - fixes a domain bug for negative bars and areas

VictoryChart
- [538](https://github.com/FormidableLabs/victory-chart/pull/538) Adds `barRatio` and `cornerRadius` props to `VictoryBar`

- [539](https://github.com/FormidableLabs/victory-chart/pull/539) Fixes a bug in bubble plots

## 0.16.0 (2017-11-07)

[176](https://github.com/FormidableLabs/victory-native/pull/176)
- Updates `react-*` and `victory-*` dependencies to latest versions
- Adds a temporary fix for text rotations. More robust fix pending resolution of [react-native-svg#242](https://github.com/react-native-community/react-native-svg/issues/242)

## 0.15.0 (2017-09-11)

[157](https://github.com/FormidableLabs/victory-native/pull/157) Supports changes related to VictoryLegend
[More details](https://github.com/FormidableLabs/victory-core/blob/master/CHANGELOG.md#1800-2017-09-09)

## 0.14.0 (2017-07-17)

[119](https://github.com/FormidableLabs/victory-native/pull/119) Transform slices rather than entire VictoryPie group

## 0.13.0 (2017-07-14)

[116](https://github.com/FormidableLabs/victory-native/pull/116) remove peerDependencies; use ~ deps
[113](https://github.com/FormidableLabs/victory-native/pull/113) Improve VictoryArea

## 0.12.0 (2017-06-20)

[111](https://github.com/FormidableLabs/victory-native/pull/111) Adds VictoryLegend

## 0.11.1 (2017-06-16)

[104](https://github.com/FormidableLabs/victory-native/pull/104) Supports polar charts for victory-native

**Breaking Change**
- Temporarily disables all rotation transformations on text elements due to an underlying [issue](https://github.com/react-native-community/react-native-svg/issues/242) in `react-native-svg`


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
