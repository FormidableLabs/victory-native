import React from "react";
import { Path } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Area } from "victory-core";

export default class extends Area {
  // Overrides method in victory-core
  renderArea(paths, style, events) {
    const areaStroke = style.stroke ? "none" : style.fill;
    const areaStyle = NativeHelpers.getStyle(Object.assign({}, style, {stroke: areaStroke}));
    const { role, shapeRendering, className } = this.props;
    return paths.map((path, index) => {
      return (
        <Path
          key={`area-${index}`}
          shapeRendering={shapeRendering || "auto"}
          role={role || "presentation"}
          d={path}
          className={className}
          {...areaStyle}
          {...events}
        />
      );
    });
  }

  // Overrides method in victory-core
  renderLine(paths, style, events) {
    if (!style.stroke || style.stroke === "none" || style.stroke === "transparent") {
      return [];
    }
    const { role, shapeRendering, className } = this.props;
    const lineStyle = NativeHelpers.getStyle(Object.assign({}, style, {fill: "none"}));
    return paths.map((path, index) => {
      return (
        <Path
          key={`area-stroke-${index}`}
          shapeRendering={shapeRendering || "auto"}
          role={role || "presentation"}
          d={path}
          className={className}
          {...lineStyle}
          {...events}
        />
      );
    });
  }
}
