import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-native-svg";
import { useGetNativeStyle } from "../../helpers/native-helpers";

const VLine = props => {
  const style = useGetNativeStyle(props.style);
  return (
    <Line
      x1={props.x1}
      x2={props.x2}
      y1={props.y1}
      y2={props.y2}
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

export default VLine;

VLine.propTypes = {
  className: PropTypes.string,
  clipPath: PropTypes.string,
  events: PropTypes.object,
  role: PropTypes.string,
  shapeRendering: PropTypes.string,
  style: PropTypes.object,
  transform: PropTypes.string,
  x1: PropTypes.number,
  x2: PropTypes.number,
  y1: PropTypes.number,
  y2: PropTypes.number
};
