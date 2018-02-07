import React from "react";
import { Line, Rect } from "../../index";
import { G } from "react-native-svg";
import { Candle } from "victory-core/es";

export default class extends Candle {
  static defaultProps = Object.assign({}, Candle.defaultProps, {
    groupComponent: <G/>,
    lineComponent: <Line/>,
    rectComponent: <Rect/>
  });
}
