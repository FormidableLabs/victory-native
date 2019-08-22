import React from "react";
import PropTypes from "prop-types";
import { Circle } from "react-native-svg";
import { useGetNativeStyle } from "../../helpers/native-helpers";

const VCircle = props => {
  const { style, ...rest } = props;
  const nativeStyle = useGetNativeStyle(style);
  return <Circle vectorEffect="non-scaling-stroke" {...rest} {...nativeStyle} />;
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
