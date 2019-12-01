# VictoryNative Changelog

## 33.0.1 (2019-12-01)

- [#516](https://github.com/FormidableLabs/victory-native/pull/516) - copy `role` from `VictoryLabel`. Thanks @gurglet!

## 33.0.0 (2019-08-22)

This PR updates `victory-*` dependencies to version `^33.0.0`. Please see [release notes] (https://github.com/FormidableLabs/victory/releases/tag/v33.0.0) for breaking changes

In addition, this PR adds improvents that require `victory-native@33.0.0` to use `react-native@~0.60.0` and `react-native-svg@^9.0.0`

Infrastructure, performance, and event improvements. Thanks @carlos-kelly!
- [#487](https://github.com/FormidableLabs/victory-native/pull/487) - Upgrade to RN~0.60.0
- [#490](https://github.com/FormidableLabs/victory-native/pull/490) - Fix native scroll bugs
- [#491](https://github.com/FormidableLabs/victory-native/pull/491) - Improve performance with functional primitive components and a memoized `getNativeStyles` hook
- [#496](https://github.com/FormidableLabs/victory-native/pull/496) - Ensures that scroll events are only blocked when appropriate (_e.g._ zooming)

## 32.0.2 (2019-04-01)

- [#451](https://github.com/FormidableLabs/victory-native/pull/451) Updates the demo to use `react-native@~0.59.0`. Thanks @ratson
- [#452](https://github.com/FormidableLabs/victory-native/pull/452) Fixes crashes with react-native-svg v7.0.0 - v9.2.3. Thanks @msand
- [#456](https://github.com/FormidableLabs/victory-native/pull/456) Adds a work around for a clipPath caching issue

## 32.0.1 (2019-03-18)

- [#450](https://github.com/FormidableLabs/victory-native/pull/450)updates lodash to fix a security vulnerability

## 32.0.0 (2019-03-15)

- Updates to `victory@32.0.0`. Changes described here: https://github.com/FormidableLabs/victory/blob/master/CHANGELOG.md#3200-2019-02-27

## 31.0.0 (2018-11-10)

- [victory/1177](https://github.com/FormidableLabs/victory/pull/1177) Adds support for controlling `radius`, `innerRadius`, `cornerRadius`, `padAngle`, `sliceStartAngle` and `sliceEndAngle` for each individual slice of a pie:

Details:
The `Slice` primitive used by `VictoryPie` now takes `radius`, `cornerRadius`, `innerRadius`, `padAngle`, `sliceStartAngle` and `sliceEndAngle` props. Each of these props may be given as number or a function of `datum` and `active`.  `padAngle`, `radius`, `cornerRadius` and `innerRadius` will be passed down from props on `VictoryBar`, but `sliceStartAngle` and `sliceEndAngle` must be defined directly on the `Slice` instance, These values should be given in degrees.  To make these values easier to use as functional props, `startAngle`, `endAngle`, and `padAngle` (in degrees) are added to each `datum` passed into `Slice`. (If your data already has these properties they will _not_ be overridden)

*Breaking Changes*
The `Slice` primitive will still take a `pathFunction` prop, but this prop will no longer be provided by `VictoryPie`. This will not be a breaking change for most users. This will only affect users who were  wrapping the `Slice` component and making use of the `pathFunction` prop provided by `VictoryPie` Users who were providing their own `pathFunction` prop to `Slice` should not be effected.

## 30.6.0 (2018-10-27)

- [#399](https://github.com/FormidableLabs/victory-native/pull/399) - Activate cursor `onTouchStart`

- [victory/#1158](https://github.com/FormidableLabs/victory/pull/1158) `cornerRadius` improvements for `VictoryBar`
  - Artifacts caused by `cornerRadius` values larger than the height of the bar have been corrected
  - `cornerRadius` now supports `topLeft`, `topRight`, `bottomLeft` and `bottomRight` values in addition to existing values. This is not a breaking change. These values may be used alongside existing values for `top` and `bottom`, but more specific values will override less specific values.

## 30.5.0 (2018-10-19)

- [#394](https://github.com/FormidableLabs/victory-native/pull/394) - Correctly clears cursors when `onTouchEnd` is triggered. Thanks @svenlombaert!
- [#393](https://github.com/FormidableLabs/victory-native/pull/393) - Correct reexports for all `victory` components

## 30.4.0 (2018-08-24)

-[378](https://github.com/FormidableLabs/victory-native/pull/378) - Adds `disableContainerEvents` prop for all native container components

## 30.3.0 (2018-08-24)

- [victory/#1088](https://github.com/FormidableLabs/victory/pull/1088) - Bugfix: don’t ignore angle: 0 for text styles
- [victory/#1091](https://github.com/FormidableLabs/victory/pull/1091) - Fix inconsistent defaultBrushArea behavior. Thanks @bees
- [victory/#1093](https://github.com/FormidableLabs/victory/pull/1093) - Remove trailing whitespace and incorrect zeroes in transform strings
- [victory/#1094](https://github.com/FormidableLabs/victory/pull/1094) - Support  direction prop for VictoryLabel and Text primitive
- [victory/#1096](https://github.com/FormidableLabs/victory/pull/1096) - Fix bug in horizontal zooming and panning
- [victory/#1101](https://github.com/FormidableLabs/victory/pull/1101) - Fix arguments in `VictoryVoronoiContainer` label function. Thanks @evsheino

## 30.1.0 (2018-07-27)

-[354](https://github.com/FormidableLabs/victory-native/pull/354)
  - Updates Victory dependencies to `30.1.0`
  - Supports `react-native-svg^6.5.0`

## 30.0.0 (2018-07-23)

- Updates all `victory-*` dependencies to use `30.0.0` versions, including new, more modular packages.
Please see [Victory's Changelog](https://github.com/FormidableLabs/victory/blob/master/CHANGELOG.md#3000-2018-07-17) for details, and [this blog post](https://formidable.com/blog/2018/victory-is-turning-thirty/) for versioning rationale
- Upgrades `victory-native` for compatibility with `react-native@0.56.0`

Associated Pull Requests:
-[347](https://github.com/FormidableLabs/victory-native/pull/347) updates test and demo infrastructure to work with `react-native@0.56.0`
-[346](https://github.com/FormidableLabs/victory-native/pull/346) refactors and simplifies native container mixins, and enforces consistency for imports
-[343](https://github.com/FormidableLabs/victory-native/pull/343) updates all `victory-*` dependencies and updates infrastructure to babel 7

## 0.18.2 (2018-06-22)

VictoryCore
-[390](https://github.com/FormidableLabs/victory-core/pull/390) *Breaking Change for other Victory packages*
This PR changes how the exported helper `reduceChildren` operates, and removes `getDomainFromGroupedData`
-[392](https://github.com/FormidableLabs/victory-core/pull/392) Make sure transforms are applied to primitive components

VictoryChart
-[555](https://github.com/FormidableLabs/victory-chart/pull/555) Refactors how `VictoryStack` and `VictoryGroup` interact with child data. Fixes bugs related to stacked and grouped charts in `VictoryVoronoiContainer`


## 0.18.1 (2018-06-13)

-[322](https://github.com/FormidableLabs/victory-native/pull/322) Use `Dimension.get("window").width` to set the default `width` and `height` for `VictoryPie`

## 0.18.0 (2018-06-06)

**Breaking Changes**
- Refactors utility methods. This is an internal breaking change, but should not be a breaking change for most Victory users. See [victory-core/380](https://github.com/FormidableLabs/victory-core/pull/380) for details

- Upgrades to `react-fast-compare@^2.0.0` which changes function comparison. This means that Victory components _will_ update when functions are not equal. This closes several Victory issues, but may cause a slight performance decline

- Disable arbitrary styles from data
This change deprecates Victory's ability to automatically pick up style attributes from the data object. This change will improve performance, but will be a breaking change for many users. Fortunately the upgrade path is simple:

If your data object looks like
```
data={[
  { x: 1, y: 1, fill: "red", opacity: 0.2 },
  ...
]}
```
Add the following functional styles:
```
style={{ data:  { fill: (d) => d.fill, opacity: (d) => d.opacity } }}
```
and everything will work as before.

- Limit Pre-calculating label props
Base props for labels will no longer be pre-calculated unless a labels prop exists. This change improves performance, but it will be a breaking change for users who were using events for adding labels to elements that did not already have them using an event mutation like:

```
events={[{
  target: "data",
  eventHandlers: {
    onClick: () => {
      return [{ target: "labels", mutation: () => ({ text: "clicked" }) }];
    }
  }
}]}
```
If you are using this pattern, you can make labels work as expected by adding a dummy labels prop like: `labels={() => null}`

Note: This change _does not_ affect tooltips, which exist, but are invisible until they receive the `active` prop

**New Features**
- Adds `minDomain` and `maxDomain` props. These props may be used to set one edge of a domain while allowing the other edge to be determined by data or other props. `minDomain` and `maxDomain` override `domainPadding`.
- Adds `singleQuadrantDomainPadding` prop. This prop may be given as a boolean or an object with boolean values for x and y. When this prop is set to `false` for a given dimension, any `domainPadding` applied in that dimension will _not_ be constrained to existing quadrants.
- Support top and bottom cornerRadius for bars. Support functional cornerRadius
`defaultBrushArea` prop with supported options "all", "none" and "disable"

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
