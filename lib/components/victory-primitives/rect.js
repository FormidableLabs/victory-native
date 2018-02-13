import React from "react";
import PropTypes from "prop-types";
import { Collection } from "victory-core";
import { Rect } from "react-native-svg";
import { NativeHelpers } from "../../index";

export default class VRect extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    clipPath: PropTypes.string,
    events: PropTypes.object,
    height: PropTypes.number,
    role: PropTypes.string,
    rx: PropTypes.number,
    ry: PropTypes.number,
    shapeRendering: PropTypes.string,
    style: PropTypes.object,
    transform: PropTypes.string,
    width: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number
  };

  shouldComponentUpdate(nextProps) {
    return !Collection.areVictoryPropsEqual(this.props, nextProps);
  }

  render() {
    const {
      x, y, rx, ry, width, height, events, className, clipPath, role,
      shapeRendering, transform
    } = this.props;
    const style = NativeHelpers.getStyle(this.props.style);

    return (
      <Rect
        x={x} y={y} rx={rx} ry={ry} width={width} height={height}
        className={className}
        clipPath={clipPath}
        transform={transform}
        role={role || "presentation"}
        shapeRendering={shapeRendering || "auto"}
        vectorEffect="non-scaling-stroke"
        {...style}
        {...events}
      />
    );
  }
}
