import createContainer from "./helpers/create-container";

export {
  VictoryAnimation,
  VictorySharedEvents,
  VictoryTheme,
  VictoryTransition
} from "victory-core/es";

export { default as Circle } from "./components/victory-primitives/circle";
export { default as Line } from "./components/victory-primitives/line";
export { default as Path } from "./components/victory-primitives/path";
export { default as Rect } from "./components/victory-primitives/rect";
export { default as Text } from "./components/victory-primitives/text";
export { default as TSpan } from "./components/victory-primitives/tspan";
export { default as Arc } from "./components/victory-primitives/arc";
export { default as Area } from "./components/victory-primitives/area";
export { default as Bar } from "./components/victory-primitives/bar";
export { default as Border, default as Box } from "./components/victory-primitives/border";
export { default as Candle } from "./components/victory-primitives/candle";
export { default as ClipPath } from "./components/victory-primitives/clip-path";
export { default as Curve } from "./components/victory-primitives/curve";
export { default as ErrorBar } from "./components/victory-primitives/error-bar";
export { default as Axis, default as Grid } from "./components/victory-primitives/line";
export { default as Point } from "./components/victory-primitives/point";
export { default as Slice } from "./components/victory-primitives/slice";
export { default as Voronoi } from "./components/victory-primitives/voronoi";
export { default as Flyout } from "./components/victory-primitives/flyout";
export { default as Whisker } from "./components/victory-primitives/whisker";
export { default as VictoryTooltip } from "./components/victory-tooltip";
export { default as VictoryPortal } from "./components/victory-portal/victory-portal";
export { default as Portal } from "./components/victory-portal/portal";
export { default as VictoryArea } from "./components/victory-area";
export { default as VictoryAxis } from "./components/victory-axis";
export { default as VictoryPolarAxis } from "./components/victory-polar-axis";
export { default as VictoryBar } from "./components/victory-bar";
export { default as VictoryBoxPlot } from "./components/victory-boxplot";
export { default as VictoryGroup } from "./components/victory-group";
export { default as VictoryLine } from "./components/victory-line";
export { default as VictoryScatter } from "./components/victory-scatter";
export { default as VictoryStack } from "./components/victory-stack";
export { default as VictoryChart } from "./components/victory-chart";
export { default as VictoryErrorBar } from "./components/victory-errorbar";
export { default as VictoryCandlestick } from "./components/victory-candlestick";
export { default as VictoryVoronoi } from "./components/victory-voronoi";
export { default as VictoryPie } from "./components/victory-pie";
export { default as VictoryContainer } from "./components/victory-container";
export { default as VictoryClipContainer } from "./components/victory-clip-container";
export { zoomContainerMixin } from "./components/victory-zoom-container";
export { voronoiContainerMixin } from "./components/victory-voronoi-container";
export { selectionContainerMixin } from "./components/victory-selection-container";
export { brushContainerMixin } from "./components/victory-brush-container";
export { default as VictoryLabel } from "./components/victory-label";
export { default as VictoryLegend } from "./components/victory-legend";
export { default as NativeHelpers } from "./helpers/native-helpers";
export { default as NativeZoomHelpers } from "./helpers/native-zoom-helpers";

export { createContainer };

// create the containers here
// so there isn't a circular dependency between victory-*-container and create-container
export const VictoryZoomContainer = createContainer("zoom");
export const VictoryBrushContainer = createContainer("brush");
export const VictorySelectionContainer = createContainer("selection");
export const VictoryVoronoiContainer = createContainer("voronoi");
export const VictoryCursorContainer = createContainer("cursor");
