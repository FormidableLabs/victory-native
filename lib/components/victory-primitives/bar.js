import React from "react";
import { Path } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Bar } from "victory-core/es";

export default class extends Bar {
  // Overrides method in victory-core
  renderBar(path, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    const { role, shapeRendering, className, polar, origin } = this.props;
    const transform = polar && origin ? `translate(${origin.x} ${origin.y})` : undefined;
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
