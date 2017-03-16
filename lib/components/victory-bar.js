import React from "react";
import { Dimensions, Platform } from "react-native";
import { G } from "react-native-svg";

import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import { Bar } from "../index";

import { VictoryBar } from "victory-chart/src";

export default class extends VictoryBar {
  static defaultProps = {
    ...VictoryBar.defaultProps,
    dataComponent: <Bar/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  }

  shouldAnimate() {
    return (Platform.OS === "android") ? false : Boolean(this.props.animate);
  }
}
