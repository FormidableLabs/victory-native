import React from "react";
import { Path } from "react-native-svg";
import { Slice } from "victory-core/es";
import { NativeHelpers } from "../../index";

export default class extends Slice {
  // Overrides method in victory-core
  renderSlice(path, style, events) {
    const { role, shapeRendering, className, origin } = this.props;
    const nativeStyle = NativeHelpers.getStyle(style);
    const transform = origin ? `translate(${origin.x} ${origin.y})` : undefined;
    return (
      <Path
        className={className}
        role={role || "presentation"}
        shapeRendering={shapeRendering || "auto"}
        d={path}
        transform={transform}
        {...nativeStyle}
        {...events}
      />
    );
  }
}
