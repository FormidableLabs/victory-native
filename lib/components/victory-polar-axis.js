import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryPolarAxis } from "victory-chart/src";
import { Helpers } from "victory-core";
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

  // Overridden in victory-native
  renderGroup(props, children) {
    const origin = Helpers.getPolarOrigin(props);
    const transform = { translateX: origin.x, translateY: origin.y };
    return React.cloneElement(props.groupComponent, transform, children);
  }
}
