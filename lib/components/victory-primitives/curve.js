import React from "react";
import { Path, G } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Curve } from "victory-core";

export default class extends Curve {
  // Overridden in victory-core-native
  renderLine(path, style, events, index) { // eslint-disable-line max-params
    if (!path) {
      return <G/>;
    }
    const { role, shapeRendering, className } = this.props;
    const nativeStyle = NativeHelpers.getStyle(style);
    return (
      <path
        key={index}
        className={className}
        shapeRendering={shapeRendering || "auto"}
        vectorEffect="non-scaling-stroke"
        d={path}
        role={role || "presentation"}
        {...events}
        {...nativeStyle}
      />
    );
  }
}
