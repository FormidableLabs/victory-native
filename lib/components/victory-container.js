import React from "react";
import Svg from "react-native-svg";
import { VictoryContainer } from "victory-core/src";
import { NativeHelpers } from "../index";
import { Portal } from "../index";

export default class extends VictoryContainer {
  // Overrides method in victory-core
  renderContainer(props, svgProps, style) {
    const { children, className } = props;
    const nativeStyle = NativeHelpers.getStyle(style);
    return (
      <Svg {...nativeStyle} {...svgProps} className={className}>
        {children}
        <Portal ref={this.savePortalRef}/>
      </Svg>
    );
  }
}
