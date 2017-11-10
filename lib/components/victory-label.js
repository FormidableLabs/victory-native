import React from "react";
import { Text, TSpan } from "react-native-svg";
import { VictoryLabel, LabelHelpers } from "victory-core/src";

import { NativeHelpers } from "../index";

export default class extends VictoryLabel {
  static defaultProps = {
    ...VictoryLabel.defaultProps,
    capHeight: 0.71,
    lineHeight: 1
  };

  // temporarily override methd in victory-core. Remove once once issue in rnsvg is fixed
  // https://github.com/react-native-community/react-native-svg/issues/242
  // Note: this change will temporarily ignore all transformations other than rotations.
  getTransform(props, style) {
    const { x, y, polar } = props;
    const defaultAngle = polar ? LabelHelpers.getPolarAngle(props) : 0;
    const angle = style.angle || props.angle || defaultAngle;
    const r = angle ? angle * (Math.PI / 180) : 0;
    const a = Math.cos(r);
    const b = Math.sin(r);
    const c = -1 * Math.sin(r);
    const d = Math.cos(r);
    const e = (-1 * x * Math.cos(r)) + (y * Math.sin(r)) + x;
    const f = (-1 * x * Math.sin(r)) - (y * Math.cos(r)) + y;
    return `matrix(${a}, ${b}, ${c}, ${d}, ${e}, ${f})`;
  }

  // Overrides method in victory-core
  renderElements(props) {
    const { className, events } = props;
    const textProps = {
      dx: this.dx, dy: this.dy, x: this.x, y: this.y, className, transform: this.transform
    };
    return (
      <Text {...textProps} {...events}>
        {this.content.map((line, i) => {
          const style = NativeHelpers.getStyle(this.style[i] || this.style[0]);
          const lastStyle = NativeHelpers.getStyle(this.style[i - 1] || this.style[0]);
          const fontSize = (style.fontSize + lastStyle.fontSize) / 2;
          const textAnchor = style.textAnchor || this.textAnchor;
          const dy = i ? (this.lineHeight * fontSize) : undefined;
          return (
            <TSpan key={i} x={this.x} dy={dy} dx={this.dx} {...style} textAnchor={textAnchor}>
              {line}
            </TSpan>
          );
        })}
      </Text>
    );
  }
}
