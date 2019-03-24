import React from "react";
import PropTypes from "prop-types";
import { Defs, ClipPath, G } from "react-native-svg";

export default class VClipPath extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    clipId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  render() {
    const { children, clipId } = this.props;
    return (
      <G>
        <Defs>
          <ClipPath id={clipId}>
            {children}
          </ClipPath>
        </Defs>
      </G>
    );
  }
}
