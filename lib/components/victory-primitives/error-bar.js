import React from "react";
import { G, Line } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { ErrorBar } from "victory-core";

export default class extends ErrorBar {

  static defaultProps = {
    borderWidth: 10,
    groupComponent: <G/>
  }

  // Overrides method in victory-core
  renderLine(props, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    return <Line {...props} {...nativeStyle} {...events}/>;
  }
}
