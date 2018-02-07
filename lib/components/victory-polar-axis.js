import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryPolarAxis } from "victory-chart/es";
import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import { Axis, Arc } from "../index";

export default class extends VictoryPolarAxis {
  static defaultProps = Object.assign({}, VictoryPolarAxis.defaultProps, {
    axisComponent: <Axis/>,
    axisLabelComponent: <VictoryLabel/>,
    circularAxisComponent: <Arc type={"axis"}/>,
    circularGridComponent: <Arc type={"grid"}/>,
    tickLabelComponent: <VictoryLabel/>,
    tickComponent: <Axis/>,
    gridComponent: <Axis/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  });
}
