import React from "react";
import PropTypes from "prop-types";
import isEqual from "react-fast-compare";
import { Text } from "react-native-svg";
import { NativeHelpers } from "../../index";

export default class VText extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dx: PropTypes.number,
    dy: PropTypes.number,
    events: PropTypes.object,
    style: PropTypes.object,
    transform: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number
  };

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {
    const {
      x, y, dx, dy, events, className, children, transform
    } = this.props;
    const style = NativeHelpers.getStyle(this.props.style);
    return (
      <Text
        className={className} x={x} dx={dx} y={y} dy={dy}
        transform={transform}
        {...style}
        {...events}
      >
        {children}
      </Text>
    );
  }
}
