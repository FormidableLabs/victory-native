import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryAxis } from "victory-chart/es";

import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import { Axis } from "../index";

export default class extends VictoryAxis {
  static defaultProps = Object.assign({}, VictoryAxis.defaultProps, {
    axisComponent: <Axis/>,
    axisLabelComponent: <VictoryLabel/>,
    tickLabelComponent: <VictoryLabel/>,
    tickComponent: <Axis/>,
    gridComponent: <Axis/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  });
}
