import React from "react";
import { Dimensions, Platform } from "react-native";
import { VictoryLabel, VictoryContainer, Area, VictoryClipContainer } from "victory-core-native";
import { VictoryArea } from "victory-chart/src";

export default class extends VictoryArea {
  static defaultProps = {
    ...VictoryArea.defaultProps,
    dataComponent: <Area/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <VictoryClipContainer/>,
    width: Dimensions.get("window").width
  }

  shouldAnimate() {
    return (Platform.OS === "android") ? false : Boolean(this.props.animate);
  }
}
