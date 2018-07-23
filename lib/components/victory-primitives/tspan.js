import React from "react";
import PropTypes from "prop-types";
import isEqual from "react-fast-compare";
import { TSpan } from "react-native-svg";
import NativeHelpers from "../../helpers/native-helpers";

export default class VTSpan extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dx: PropTypes.number,
    dy: PropTypes.number,
    events: PropTypes.object,
    style: PropTypes.object,
    textAnchor: PropTypes.oneOf(["start", "middle", "end", "inherit"]),
    x: PropTypes.number,
    y: PropTypes.number
  };

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {
    const { x, y, dx, dy, events, className, textAnchor, content } = this.props;
    const style = NativeHelpers.getStyle(this.props.style);
    return (
      <TSpan
        x={x} y={y} dx={dx} dy={dy} textAnchor={textAnchor}
        className={className}
        {...style}
        {...events}
      >
        {content}
      </TSpan>
    );
  }
}
