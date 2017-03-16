import React from "react";
import { Path } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Point } from "victory-core";

export default class extends Point {
  // Overrides method in victory-core
  renderPoint(path, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    const { role, shapeRendering, className } = this.props;
    return (
      <Path
        className={className}
        role={role || "presentation"}
        shapeRendering={shapeRendering || "auto"}
        d={path}
        {...nativeStyle}
        {...events}
      />
    );
  }
}
