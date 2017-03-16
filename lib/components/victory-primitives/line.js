import React from "react";
import { Line } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Line as VLine } from "victory-core";

export default class extends VLine {
  // Overrides method in victory-core
  renderAxisLine(props, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    const { role, shapeRendering, className } = this.props;
    return (
      <Line
        className={className}
        role={role || "presentation"}
        shapeRendering={shapeRendering || "auto"}
        vectorEffect="non-scaling-stroke"
        {...props}
        {...nativeStyle}
        {...events}
      />
    );
  }
}
