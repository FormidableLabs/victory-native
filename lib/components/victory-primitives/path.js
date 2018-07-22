import React from "react";
import PropTypes from "prop-types";
import isEqual from "react-fast-compare";
import { Path } from "react-native-svg";
import NativeHelpers from "../../helpers/native-helpers";

export default class VPath extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    clipPath: PropTypes.string,
    d: PropTypes.string,
    events: PropTypes.object,
    role: PropTypes.string,
    shapeRendering: PropTypes.string,
    style: PropTypes.object,
    transform: PropTypes.string
  };

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {
    const { d, role, shapeRendering, className, clipPath, transform, events } = this.props;
    const style = NativeHelpers.getStyle(this.props.style);
    return (
      <Path
        d={d}
        transform={transform}
        className={className}
        clipPath={clipPath}
        role={role || "presentation"}
        shapeRendering={shapeRendering || "auto"}
        {...style}
        {...events}
      />
    );
  }
}
