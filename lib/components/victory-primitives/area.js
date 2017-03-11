import React from "react";
import { Path } from "react-native-svg";
import { NativeHelpers } from "../../index";
import { Area } from "victory-core";

export default class extends Area {

  // Overrides method in victory-core
  renderArea(path, style, events) {
    const areaStroke = style.stroke ? "none" : style.fill;
    const areaStyle = Object.assign({}, style, {stroke: areaStroke});
    const nativeStyle = NativeHelpers.getStyle(areaStyle);
    const { role, shapeRendering, className } = this.props;
    return (
      <Path
        key="area"
        shapeRendering={shapeRendering || "auto"}
        role={role || "presentation"}
        className={className}
        d={path}
        {...nativeStyle}
        {...events}
      />
    );
  }

  // Overrides method in victory-core
  renderLine(path, style, events) {
    if (!style.stroke || style.stroke === "none" || style.stroke === "transparent") {
      return undefined;
    }
    const { role, shapeRendering, className } = this.props;
    const lineStyle = Object.assign({}, style, {fill: "none"});
    const nativeStyle = NativeHelpers.getStyle(lineStyle);
    return (
      <Path
        key="area-stroke"
        shapeRendering={shapeRendering || "auto"}
        role={role || "presentation"}
        className={className}
        d={path}
        {...nativeStyle}
        {...events}
      />
    );
  }
}
