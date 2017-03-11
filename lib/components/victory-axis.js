import React from "react";
import { Dimensions, Platform } from "react-native";
import { G } from "react-native-svg";
import { VictoryLabel, VictoryContainer, Line } from "victory-core-native";
import { VictoryAxis } from "victory-chart/src";

export default class extends VictoryAxis {
  static defaultProps = {
    ...VictoryAxis.defaultProps,
    axisComponent: <Line/>,
    axisLabelComponent: <VictoryLabel/>,
    tickLabelComponent: <VictoryLabel/>,
    tickComponent: <Line/>,
    gridComponent: <Line/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };

  shouldAnimate() {
    return (Platform.OS === "android") ? false : Boolean(this.props.animate);
  }
}
