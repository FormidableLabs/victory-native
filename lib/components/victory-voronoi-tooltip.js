import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryVoronoiTooltip } from "victory-chart/src";

import VictoryTooltip from "./victory-tooltip";
import VictoryContainer from "./victory-container";
import { Voronoi } from "../index";

export default class extends VictoryVoronoiTooltip {
  static defaultProps = {
    ...VictoryVoronoiTooltip.defaultProps,
    dataComponent: <Voronoi/>,
    labelComponent: <VictoryTooltip/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };
}
