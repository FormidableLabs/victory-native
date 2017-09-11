import React from "react";
import { Rect } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Border } from "victory-core";

export default class extends Border {
  // Overrides method in victory-core
  renderBorder(props, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    const { role, shapeRendering, className } = this.props;
    return (
      <Rect
        {...props}
        className={className}
        role={role || "presentation"}
        shapeRendering={shapeRendering || "auto"}
        vectorEffect="non-scaling-stroke"
        {...nativeStyle}
        {...events}
      />
    );
  }
}
