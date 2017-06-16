import React from "react";
import { Path } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Bar } from "victory-core";

export default class extends Bar {
  // Overrides method in victory-core
  renderBar(path, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    const { role, shapeRendering, className, polar, origin } = this.props;
    const baseTransform = polar && origin ? `translate(${origin.x} ${origin.y})` : undefined;
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
