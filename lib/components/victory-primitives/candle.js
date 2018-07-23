import React from "react";
import Line from "./line";
import Rect from "./rect";
import { G } from "react-native-svg";
import { Candle } from "victory-candlestick/es";

export default class extends Candle {
  static defaultProps = Object.assign({}, Candle.defaultProps, {
    groupComponent: <G/>,
    lineComponent: <Line/>,
    rectComponent: <Rect/>
  });
}
