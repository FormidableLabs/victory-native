import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryChart } from "victory-chart/src";

import VictoryAxis from "./victory-axis";
import VictoryContainer from "./victory-container";

export default class extends VictoryChart {
  static defaultProps = {
    ...VictoryChart.defaultProps,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    defaultAxes: {
      independent: <VictoryAxis/>,
      dependent: <VictoryAxis dependentAxis/>
    },
    width: Dimensions.get("window").width
  };
}
