import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryPolarAxis } from "victory-chart/es";
import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import { Line, Arc } from "../index";

export default class extends VictoryPolarAxis {
  static defaultProps = {
    ...VictoryPolarAxis.defaultProps,
    axisComponent: <Line/>,
    axisLabelComponent: <VictoryLabel/>,
    circularAxisComponent: <Arc type={"axis"}/>,
    circularGridComponent: <Arc type={"grid"}/>,
    tickLabelComponent: <VictoryLabel/>,
    tickComponent: <Line/>,
    gridComponent: <Line/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  };
}
