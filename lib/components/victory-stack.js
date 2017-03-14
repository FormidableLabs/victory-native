import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryStack } from "victory-chart/src";

import VictoryContainer from "./victory-container";

export default class extends VictoryStack {
  static defaultProps = {
    ...VictoryStack.defaultProps,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };
}
