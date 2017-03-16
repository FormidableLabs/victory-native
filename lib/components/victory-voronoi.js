import React from "react";
import { Dimensions, Platform } from "react-native";
import { G } from "react-native-svg";
import { VictoryVoronoi } from "victory-chart/src";

import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import { Voronoi } from "../index";

export default class extends VictoryVoronoi {
  static defaultProps = {
    ...VictoryVoronoi.defaultProps,
    dataComponent: <Voronoi/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };

  shouldAnimate() {
    return (Platform.OS === "android") ? false : Boolean(this.props.animate);
  }
}
