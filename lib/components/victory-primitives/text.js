import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native-svg";
import { useGetNativeStyle } from "../../helpers/native-helpers";

const VText = props => {
  const { style, ...rest } = props;
  const nativeStyle = useGetNativeStyle(style);
  return (
    <Text {...rest} {...nativeStyle}>
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

export default VText;
