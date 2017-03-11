import React from "react";
import { Dimensions, Platform } from "react-native";
import { G } from "react-native-svg";
import { VictoryVoronoiTooltip } from "victory-chart/src";
import { VictoryTooltip, VictoryContainer, Voronoi } from "victory-core-native";

export default class extends VictoryVoronoiTooltip {
  static defaultProps = {
    ...VictoryVoronoiTooltip.defaultProps,
    dataComponent: <Voronoi/>,
    labelComponent: <VictoryTooltip/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };

  shouldAnimate() {
    return (Platform.OS === "android") ? false : Boolean(this.props.animate);
  }

}
