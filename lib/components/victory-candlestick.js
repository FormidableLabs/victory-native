import React from "react";
import { Dimensions, Platform } from "react-native";
import { G } from "react-native-svg";

import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import { Candle } from "../index";

import { VictoryCandlestick } from "victory-chart/src";

export default class extends VictoryCandlestick {
  static defaultProps = {
    ...VictoryCandlestick.defaultProps,
    dataComponent: <Candle/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  }

  shouldAnimate() {
    return (Platform.OS === "android") ? false : Boolean(this.props.animate);
  }
}
