import React from "react";
import PropTypes from "prop-types";
import { Collection } from "victory-core";
import { TSpan } from "react-native-svg";
import { NativeHelpers } from "../../index";


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
    const { className, x, y, dx, dy, textAnchor, style, content } = this.props;
    if (!Collection.allSetsEqual([
      [className, nextProps.className],
      [content, nextProps.content],
      [x, nextProps.x],
      [y, nextProps.y],
      [dx, nextProps.rx],
      [dy, nextProps.ry],
      [textAnchor, nextProps.textAnchor],
      [style, nextProps.style]
    ])) {
      return true;
    }
    return false;
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
