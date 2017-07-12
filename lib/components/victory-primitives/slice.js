import React from "react";
import { Path } from "react-native-svg";
import { Slice } from "victory-core";
import { NativeHelpers } from "../../index";

export default class extends Slice {
  // Overrides method in victory-core
  renderSlice(path, style, events) {
    const { role, shapeRendering, className, origin } = this.props;
    const nativeStyle = NativeHelpers.getStyle(style);
    const baseTransform = origin ? `translate(${origin.x} ${origin.y})` : undefined;
    const transform = NativeHelpers.getTransform(baseTransform);
    return (
      <Path
        className={className}
        role={role || "presentation"}
        shapeRendering={shapeRendering || "auto"}
        d={path}
        {...transform}
        {...nativeStyle}
        {...events}
      />
    );
  }
}
