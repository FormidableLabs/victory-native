import React from "react";
import { Dimensions } from "react-native";
import { G } from "react-native-svg";
import { VictoryBoxPlot } from "victory-chart/es";

import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import { Box, Whisker, Line } from "../index";

export default class extends VictoryBoxPlot {
  static defaultProps = Object.assign({}, VictoryBoxPlot.defaultProps, {
    maxComponent: <Whisker/>,
    maxLabelComponent: <VictoryLabel/>,
    medianComponent: <Line/>,
    medianLabelComponent: <VictoryLabel/>,
    minComponent: <Whisker/>,
    minLabelComponent: <VictoryLabel/>,
    q1Component: <Box/>,
    q1LabelComponent: <VictoryLabel/>,
    q3Component: <Box/>,
    q3LabelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  });
}
