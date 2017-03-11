import React from "react";
import { Path } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Curve } from "victory-core";

export default class extends Curve {
  // Overrides method in victory-core
  renderLine(path, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    const { role, shapeRendering, className } = this.props;
    return (
      <Path
        className={className}
        shapeRendering={shapeRendering || "auto"}
        role={role || "presentation"}
        vectorEffect="non-scaling-stroke"
        d={path}
        {...nativeStyle}
        {...events}
      />
    );
  }
}
