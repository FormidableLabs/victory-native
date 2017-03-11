import React from "react";
import { Dimensions, Platform } from "react-native";
import { G } from "react-native-svg";
import { VictoryLabel, VictoryContainer, Point } from "victory-core-native";
import { VictoryScatter } from "victory-chart/src";

export default class extends VictoryScatter {
  static defaultProps = {
    ...VictoryScatter.defaultProps,
    dataComponent: <Point/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };

  shouldAnimate() {
    return (Platform.OS === "android") ? false : Boolean(this.props.animate);
  }
}
