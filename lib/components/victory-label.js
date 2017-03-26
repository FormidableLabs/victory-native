import React from "react";
import omit from "lodash.omit";
import { Text, TSpan } from "react-native-svg";
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
    const textProps = {
      dx: this.dx, dy: this.dy, x: props.x, y: props.y, className: props.className
    };
    const transform = NativeHelpers.getTransform(this.transform);

    return (
      <Text {...textProps} {...transform} {...props.events}>
        {this.content.map((line, i) => {
          const style = NativeHelpers.getStyle(this.style[i] || this.style[0]);
          const lastStyle = NativeHelpers.getStyle(this.style[i - 1] || this.style[0]);
          const fontSize = (style.fontSize + lastStyle.fontSize) / 2;
          const textAnchor = style.textAnchor || this.textAnchor;
          const dy = i ? (this.lineHeight * fontSize) : undefined;
          return (
            <TSpan key={i} x={props.x} dy={dy} dx={this.dx} style={style} textAnchor={textAnchor}>
              {line}
            </TSpan>
          );
        })}
      </Text>
    );
  }
}
