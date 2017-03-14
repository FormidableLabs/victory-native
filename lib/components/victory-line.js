import React from "react";
import { Dimensions, Platform } from "react-native";
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

  shouldAnimate() {
    return (Platform.OS === "android") ? false : Boolean(this.props.animate);
  }

}
