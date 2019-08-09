import React from "react";
import PropTypes from "prop-types";
import { Path } from "react-native-svg";
import { useGetNativeStyle } from "../../helpers/native-helpers";

const VPath = props => {
  const style = useGetNativeStyle(props.style);
  return (
    <Path
      d={props.d}
      transform={props.transform}
      className={props.className}
      clipPath={props.clipPath}
      role={props.role || "presentation"}
      shapeRendering={props.shapeRendering || "auto"}
      {...style}
      {...props.events}
    />
  );
};

export default VPath;

VPath.propTypes = {
  className: PropTypes.string,
  clipPath: PropTypes.string,
  d: PropTypes.string,
  events: PropTypes.object,
  role: PropTypes.string,
  shapeRendering: PropTypes.string,
  style: PropTypes.object,
  transform: PropTypes.string
};

