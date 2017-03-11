import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryContainer } from "victory-core-native";
import { VictoryStack } from "victory-chart/src";

export default class extends VictoryStack {
  static defaultProps = {
    ...VictoryStack.defaultProps,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };
}
