import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryErrorBar } from "victory-chart/src";

import VictoryContainer from "./victory-container";
import { ErrorBar } from "../index";

export default class extends VictoryErrorBar {
  static defaultProps = {
    ...VictoryErrorBar.defaultProps,
    dataComponent: <ErrorBar/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };
}
