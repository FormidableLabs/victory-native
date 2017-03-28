import React from "react";
import { Path, G } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Curve } from "victory-core";

export default class extends Curve {
  static defaultProps = {
    groupComponent: <G/>
  };

  // Overrides method in victory-core
  renderLine(paths, style, events) {
    const { role, shapeRendering, className } = this.props;
    const nativeStyle = NativeHelpers.getStyle(style);
    return paths.map((path, index) => {
      return (
        <Path
          key={`area-stroke-${index}`}
          shapeRendering={shapeRendering || "auto"}
          role={role || "presentation"}
          d={path}
          className={className}
          {...nativeStyle}
          {...events}
        />
      );
    });
  }
}
