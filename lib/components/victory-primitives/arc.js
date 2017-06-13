import React from "react";
import { Path } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Arc } from "victory-core";

export default class extends Arc {
  // Overridden in victory-core-native
  renderAxisLine(props, style, events) {
    const { role, shapeRendering, className } = props;
    const nativeStyle = NativeHelpers.getStyle(style);
    const path = this.getArcPath(props);
    return (
      <Path className={className}
        d={path}
        style={style}
        role={role || "presentation"}
        shapeRendering={shapeRendering || "auto"}
        {...nativeStyle}
        {...events}
      />
    );
  }
}
