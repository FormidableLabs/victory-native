import React from "react";
import PropTypes from "prop-types";
import { Rect, G } from "react-native-svg";
import { last } from "lodash";
import { BrushHelpers } from "victory-chart/es";
import { VictoryContainer, NativeHelpers } from "../index";

// ensure the selection component get native styles
const RectWithStyle = ({ style, ...otherProps }) =>
  <Rect {...otherProps} {...NativeHelpers.getStyle(style)} />;

RectWithStyle.propTypes = {
  style: PropTypes.object
};

export const brushContainerMixin = (base) => class VictoryNativeSelectionContainer extends base { // eslint-disable-line max-len
  static defaultProps = Object.assign({}, VictoryContainer.defaultProps, {
    selectionStyle: {
      stroke: "transparent",
      fill: "black",
      fillOpacity: 0.1
    },
    handleStyle: {
      stroke: "transparent",
      fill: "transparent"
    },
    handleWidth: 8,
    brushComponent: <RectWithStyle/>,
    handleComponent: <RectWithStyle/>
  });

  static defaultEvents = (props) => {
    return [{
      target: "parent",
      eventHandlers: {
        onTouchStart: (evt, targetProps) => {
          if (props.disable) {
            return {};
          }
          BrushHelpers.onMouseMove.cancel();
          return BrushHelpers.onMouseDown(evt, targetProps);
        },
        onTouchMove: (evt, targetProps) => {
          return props.disable ? {} : BrushHelpers.onMouseMove(evt, targetProps);
        },
        onTouchEnd: (evt, targetProps) => {
          if (props.disable) {
            return {};
          }
          BrushHelpers.onMouseMove.cancel();
          return BrushHelpers.onMouseUp(evt, targetProps);
        }
      }
    }];
  };

  getChildren(props) {
    const { children } = props; // eslint-disable-line react/prop-types
    const lastChild = last(children);
    // replace the web's getChildren's <g> with <G> from react-native-svg
    if (lastChild && lastChild.type === "g") {
      children[children.length - 1] = (
        <G key="brush-group">
          {lastChild.props.children}
        </G>
      );
    }
    return children;
  }
};
