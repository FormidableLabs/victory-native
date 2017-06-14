import React from "react";
import { Text, G, TSpan } from "react-native-svg";
import { VictoryLabel } from "victory-core/src";

import { NativeHelpers } from "../index";
import { Helpers } from "victory-core";

export default class extends VictoryLabel {
  static defaultProps = {
    ...VictoryLabel.defaultProps,
    capHeight: 0.71,
    lineHeight: 1
  };

  // Overrides method in victory-core
  renderElements(props) {
    const { x, y, className, events  } = props;
    const textProps = {
      dx: this.dx, dy: this.dy, x, y, className,
      textAnchor: this.textAnchor
    };

    const transform = NativeHelpers.getTransform(this.transform);
    return (
      <Text {...transform} {...textProps}
        {...events}
      >
        {this.content.map((line, i) => {
          const style = NativeHelpers.getStyle(this.style[i] || this.style[0]);
          const lastStyle = NativeHelpers.getStyle(this.style[i - 1] || this.style[0]);
          const fontSize = (style.fontSize + lastStyle.fontSize) / 2;
          const textAnchor = style.textAnchor || this.textAnchor;
          const dy = i ? (this.lineHeight * fontSize) : 0;
          return (
            <TSpan key={i} x={x} y={y} dy={dy} dx={this.dx} {...style} textAnchor={textAnchor}>
              {line}
            </TSpan>
          );
        })}
      </Text>
    );
  }
}
