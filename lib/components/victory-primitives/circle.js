import React from "react";
import PropTypes from "prop-types";
import { Circle } from "react-native-svg";
import { useGetNativeStyle } from "../../helpers/native-helpers";

const VCircle = props => {
  const style = useGetNativeStyle(props.style);
  return (
    <Circle
      cx={props.cx}
      cy={props.cy}
      r={props.r}
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

export default VCircle;

VCircle.propTypes = {
  className: PropTypes.string,
  clipPath: PropTypes.string,
  cx: PropTypes.number,
  cy: PropTypes.number,
  events: PropTypes.object,
  r: PropTypes.number,
  role: PropTypes.string,
  shapeRendering: PropTypes.string,
  style: PropTypes.object,
  transform: PropTypes.string
};
