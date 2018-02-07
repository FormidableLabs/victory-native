import React from "react";
import PropTypes from "prop-types";
import { Collection } from "victory-core";
import { Path } from "react-native-svg";
import { NativeHelpers } from "../../index";


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
    const { className, clipPath, d, style, transform } = this.props;
    if (!Collection.allSetsEqual([
      [className, nextProps.className],
      [clipPath, nextProps.clipPath],
      [d, nextProps.d],
      [transform, nextProps.transform],
      [style, nextProps.style]
    ])) {
      return true;
    }
    return false;
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
