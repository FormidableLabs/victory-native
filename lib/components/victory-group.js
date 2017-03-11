import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryContainer } from "victory-core-native";
import { VictoryGroup } from "victory-chart/src";

export default class extends VictoryGroup {
  static defaultProps = {
    ...VictoryGroup.defaultProps,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };
}
