import React from "react";
import { Dimensions, Platform } from "react-native";
import { G } from "react-native-svg";
import { VictoryErrorBar } from "victory-chart/src";
import { VictoryContainer, ErrorBar } from "victory-core-native";

export default class extends VictoryErrorBar {
  static defaultProps = {
    ...VictoryErrorBar.defaultProps,
    dataComponent: <ErrorBar/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };

  shouldAnimate() {
    return (Platform.OS === "android") ? false : Boolean(this.props.animate);
  }

}
