import React from "react";
import { Dimensions } from "react-native";
import { VictoryLine } from "victory-chart/src";

import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import VictoryClipContainer from "./victory-clip-container";
import { Curve } from "../index";

export default class extends VictoryLine {
  static defaultProps = {
    ...VictoryLine.defaultProps,
    dataComponent: <Curve/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <VictoryClipContainer/>,
    width: Dimensions.get("window").width
  };
}
