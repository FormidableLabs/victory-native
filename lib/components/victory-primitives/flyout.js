import React from "react";
import { Path } from "react-native-svg";
import { Flyout } from "victory-core";
import { NativeHelpers } from "../../index";

export default class extends Flyout {
  // Overrides method in victory-core
  renderFlyout(path, style, events) {
    const nativeStyle = NativeHelpers.getStyle(style);
    const { role, shapeRendering, className } = this.props;
    return (
      <Path
        className={className}
        shapeRendering={shapeRendering || "auto"}
        role={role || "presentation"}
        d={path}
        {...nativeStyle}
        {...events}
      />
    );
  }
}
