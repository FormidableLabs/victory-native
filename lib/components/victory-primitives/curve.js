import React from "react";
import { Path, G } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Curve } from "victory-core";

export default class extends Curve {
  static defaultProps = {
    groupComponent: <G/>
  };

  // Overrides method in victory-core
  renderLine(path, style, events) {
    const { role, shapeRendering, className, polar, origin } = this.props;
    const nativeStyle = NativeHelpers.getStyle(style);
    const baseTransform = polar && origin ? `translate(${origin.x} ${origin.y})` : undefined;
    const transform = NativeHelpers.getTransform(baseTransform);
    return (
      <Path
        key={"curve"}
        shapeRendering={shapeRendering || "auto"}
        role={role || "presentation"}
        d={path}
        className={className}
        {...transform}
        {...nativeStyle}
        {...events}
      />
    );
  }
}
