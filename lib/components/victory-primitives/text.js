import React from "react";
import PropTypes from "prop-types";
import isEqual from "react-fast-compare";
import { Text } from "react-native-svg";
import { useGetNativeStyle } from "../../helpers/native-helpers";

const VText = props => {
  const style = useGetNativeStyle(props.style);
  return (
    <Text
      className={props.className}
      x={props.x}
      dx={props.dx}
      y={props.y}
      dy={props.dy}
      direction={props.direction}
      transform={props.transform}
      {...style}
      {...props.events}
    >
      {props.children}
    </Text>
  );
};

VText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf(["ltr", "rtl", "inherit"]),
  dx: PropTypes.number,
  dy: PropTypes.number,
  events: PropTypes.object,
  style: PropTypes.object,
  transform: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number
};

export default React.memo(VText, isEqual);
