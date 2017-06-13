import React from "react";
import { Text, G } from "react-native-svg";
import { VictoryLabel } from "victory-core/src";

import { NativeHelpers } from "../index";

export default class extends VictoryLabel {
  static defaultProps = {
    ...VictoryLabel.defaultProps,
    capHeight: 0.71,
    lineHeight: 1
  };

  // Overrides method in victory-core
  renderElements(props) {
    const { x, y, dx, className, events, angle } = props;
    // const transform = NativeHelpers.getTransform(this.transform);
    const transform = { rotate: angle };
    return (
      <G {...transform} {...events} className={className}>
        {this.content.map((line, i) => {
          const style = NativeHelpers.getStyle(this.style[i] || this.style[0]);
          const lastStyle = NativeHelpers.getStyle(this.style[i - 1] || this.style[0]);
          const fontSize = (style.fontSize + lastStyle.fontSize) / 2;
          const textAnchor = style.textAnchor || this.textAnchor;
          const lineOffset = i ? fontSize : 0;
          const dy = this.dy - fontSize + lineOffset;
          return (
            <Text {...style} key={i} x={x} y={y} dx={dx} dy={dy} textAnchor={textAnchor}>
              {line}
            </Text>
          );
        })}
      </G>
    );
  }
}
