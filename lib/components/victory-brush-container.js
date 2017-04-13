import React from "react";
import { Rect, G } from "react-native-svg";
import { last } from "lodash";
import { brushContainerMixin as brushContainerMixinOriginal } from "victory-chart/src";
import { VictoryContainer, NativeBrushHelpers, NativeHelpers } from "../index";
import { combineContainerMixins } from "../helpers/create-container";

// ensure the selection component get native styles
const RectWithStyle = ({style, ...otherProps}) =>
  <Rect {...otherProps} {...NativeHelpers.getStyle(style)} />;

export const brushContainerMixin = (base) => class VictoryNativeSelectionContainer extends base { // eslint-disable-line max-len
  static defaultProps = {
    ...VictoryContainer.defaultProps,
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
    selectionComponent: <RectWithStyle/>,
    handleComponent: <RectWithStyle/>
  };

  static defaultEvents = [{
    target: "parent",
    eventHandlers: {
      onTouchStart: (evt, targetProps) => {
        NativeBrushHelpers.onTouchMove.cancel();
        return NativeBrushHelpers.onTouchStart(evt, targetProps);
      },
      onTouchMove: (evt, targetProps) => {
        return NativeBrushHelpers.onTouchMove(evt, targetProps);
      },
      onTouchEnd: (evt, targetProps) => {
        NativeBrushHelpers.onTouchMove.cancel();
        return NativeBrushHelpers.onTouchEnd(evt, targetProps);
      }
    }
  }];

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

export default combineContainerMixins(brushContainerMixinOriginal, brushContainerMixin);
