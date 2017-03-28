import React from "react";
import { Line, Rect, G } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Candle } from "victory-core";

export default class extends Candle {

  static defaultProps = {
    groupComponent: <G/>
  };

   // Overrides method in victory-core
  renderWick(props) {
    const nativeStyle = NativeHelpers.getStyle(props.style);
    return <Line {...props} {...nativeStyle}/>;
  }

  // Overrides method in victory-core
  renderCandle(props) {
    const nativeStyle = NativeHelpers.getStyle(props.style);
    return <Rect {...props} {...nativeStyle}/>;
  }
}
