import React from "react";
import { G } from "react-native-svg";
import { VictoryLegend } from "victory-core/es";
import { Dimensions } from "react-native";
import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import { Point, Border } from "../index";

export default class extends VictoryLegend {
  static defaultProps = Object.assign({}, VictoryLegend.defaultProps, {
    borderComponent: <Border/>,
    containerComponent: <VictoryContainer/>,
    dataComponent: <Point/>,
    groupComponent: <G/>,
    labelComponent: <VictoryLabel/>,
    titleComponent: <VictoryLabel/>,
    width: Dimensions.get("window").width
  });
}
