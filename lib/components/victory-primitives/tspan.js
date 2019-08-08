import React from "react";
import PropTypes from "prop-types";
import isEqual from "react-fast-compare";
import { TSpan } from "react-native-svg";
import { useGetNativeStyle } from "../../helpers/native-helpers";

const VTSpan = props => {
  const style = useGetNativeStyle(props.style);
  return (
    <TSpan
      x={props.x}
      y={props.y}
      dx={props.dx}
      dy={props.dy}
      textAnchor={props.textAnchor}
      className={props.className}
      {...style}
      {...props.events}
    >
      {props.content}
    </TSpan>
  );
};

VTSpan.propTypes = {
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

export default React.memo(VTSpan, isEqual);
