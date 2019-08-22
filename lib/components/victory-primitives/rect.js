import React from "react";
import PropTypes from "prop-types";
import { Rect } from "react-native-svg";
import { useGetNativeStyle } from "../../helpers/native-helpers";

const VRect = props => {
  const { style, ...rest } = props;
  const nativeStyle = useGetNativeStyle(style);
  return <Rect vectorEffect="non-scaling-stroke" {...rest} {...nativeStyle} />;
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
