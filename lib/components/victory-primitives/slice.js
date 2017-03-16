import React from "react";
import { Path } from "react-native-svg";
import { Slice } from "victory-core";
import { NativeHelpers } from "../../index";

export default class extends Slice {
  // Overrides method in victory-core
  renderSlice(path, style, events) {
    const { role, shapeRendering, className } = this.props;
    const nativeStyle = NativeHelpers.getStyle(style);
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
