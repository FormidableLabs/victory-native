import React from "react";
import PropTypes from "prop-types";
import { Rect } from "react-native-svg";
import { useGetNativeStyle } from "../../helpers/native-helpers";

const VRect = props => {
  const style = useGetNativeStyle(props.style);
  return (
    <Rect
      x={props.x}
      y={props.y}
      rx={props.rx}
      ry={props.ry}
      width={props.width}
      height={props.height}
      className={props.className}
      clipPath={props.clipPath}
      transform={props.transform}
      role={props.role || "presentation"}
      shapeRendering={props.shapeRendering || "auto"}
      vectorEffect="non-scaling-stroke"
      {...style}
      {...props.events}
    />
  );
};

export default VRect;

VRect.propTypes = {
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
