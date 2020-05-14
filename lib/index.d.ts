// TODO: Add missing type definitions for all import/export
// items that are commented out.

export {
  VictoryAnimation,
  VictoryTheme,
  VictoryPortal,
  VictoryClipContainer,
  VictoryLabel
  // VictoryTransition,
  // addEvents, Collection, Data, DefaultTransitions, Domain, Events, Helpers, Log,
  // PropTypes, Scale, Style, TextSize, Transitions, Selection, LabelHelpers, Axis, Wrapper
} from "victory-core";

// export { VictorySharedEvents } from "victory-shared-events/es";

//   export { default as Circle } from "./components/victory-primitives/circle";
//   export { default as Line } from "./components/victory-primitives/line";
//   export { default as Path } from "./components/victory-primitives/path";
//   export { default as Rect } from "./components/victory-primitives/rect";
//   export { default as Text } from "./components/victory-primitives/text";
//   export { default as TSpan } from "./components/victory-primitives/tspan";
//   export { default as Arc } from "./components/victory-primitives/arc";
//   export { default as Area } from "./components/victory-primitives/area";
  export { Background } from "victory-core";
//   export { default as Bar } from "./components/victory-primitives/bar";
//   export { default as Border, default as Box } from "./components/victory-primitives/border";
//   export { default as Candle } from "./components/victory-primitives/candle";
//   export { default as ClipPath } from "./components/victory-primitives/clip-path";
//   export { default as Curve } from "./components/victory-primitives/curve";
//   export { default as ErrorBar } from "./components/victory-primitives/error-bar";
//   export { default as LineSegment } from "./components/victory-primitives/line-segment";
//   export { default as Point } from "./components/victory-primitives/point";
//   export { default as Slice } from "./components/victory-primitives/slice";
//   export { default as Voronoi } from "./components/victory-primitives/voronoi";
export { VictoryTooltip, Flyout } from "victory-tooltip";
//   export { default as Whisker } from "./components/victory-primitives/whisker";
//   export { default as Portal } from "./components/victory-portal/portal";
export { VictoryArea } from "victory-area";
export { VictoryAxis } from "victory-axis";
//   export { default as VictoryPolarAxis } from "./components/victory-polar-axis";
export { VictoryBar } from "victory-bar";
export { VictoryHistogram } from "victory-histogram";
export { VictoryBoxPlot } from "victory-box-plot";
export { VictoryGroup } from "victory-group";
export { VictoryLine } from "victory-line";
export { VictoryScatter } from "victory-scatter";
export { VictoryStack } from "victory-stack";
export { VictoryChart } from "victory-chart";
//   export { default as VictoryErrorBar } from "./components/victory-errorbar";
//   export { default as VictoryCandlestick } from "./components/victory-candlestick";
//   export { default as VictoryVoronoi } from "./components/victory-voronoi";
export { VictoryPie } from "victory-pie";
export { default as VictoryContainer } from "./components/victory-container";
export { VictoryLegend } from "victory-legend";
//   export { default as NativeHelpers } from "./helpers/native-helpers";
//   export { default as NativeZoomHelpers } from "./helpers/native-zoom-helpers";
export {
  zoomContainerMixin, default as VictoryZoomContainer
} from "./components/victory-zoom-container";
export {
  voronoiContainerMixin, default as VictoryVoronoiContainer
} from "./components/victory-voronoi-container";
//   export {
//     selectionContainerMixin, default as VictorySelectionContainer
//   } from "./components/victory-selection-container";
export {
  cursorContainerMixin, default as VictoryCursorContainer
} from "./components/victory-cursor-container";
export {
  brushContainerMixin, default as VictoryBrushContainer
} from "./components/victory-brush-container";
export { createContainer } from "victory-create-container";