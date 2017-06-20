import React from "react";
import { G } from "react-native-svg";
import { VictoryLegend } from "victory-core/src";
import { Dimensions } from "react-native";
import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import { Point, NativeHelpers } from "../index";

export default class extends VictoryLegend {
  static defaultProps = {
    ...VictoryLegend.defaultProps,
    containerComponent: <VictoryContainer/>,
    dataComponent: <Point/>,
    groupComponent: <G/>,
    labelComponent: <VictoryLabel/>,
    width: Dimensions.get("window").width
  };

  renderGroup(props, children) {
    const { groupComponent, height, parentStyles, standalone, width, x, y } = props;
    let groupProps = { role: "presentation" };
    const styles = NativeHelpers.getStyle(parentStyles);

    if (!standalone) {
      groupProps = {
        height,
        width,
        translateX: x,
        translateY: y,
        ...styles,
        ...groupProps
      };
    }
    return React.cloneElement(groupComponent, groupProps, children);
  }
}
