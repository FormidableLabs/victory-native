import React from "react";
import { Dimensions, Platform } from "react-native";
import { VictoryArea } from "victory-chart/src";

import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import VictoryClipContainer from "./victory-clip-container";
import Area from "./victory-primitives/area"

export default class extends VictoryArea {
  static defaultProps = {
    ...VictoryArea.defaultProps,
    dataComponent: <Area/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <VictoryClipContainer/>,
    width: Dimensions.get("window").width
  }

  shouldAnimate() {
    return (Platform.OS === "android") ? false : Boolean(this.props.animate);
  }
}
