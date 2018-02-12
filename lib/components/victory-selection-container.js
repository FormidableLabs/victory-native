import React from "react";
import PropTypes from "prop-types";
import { Rect } from "react-native-svg";
import { SelectionHelpers } from "victory-chart/es";
import { VictoryContainer, NativeHelpers } from "../index";

// ensure the selection component get native styles
const DefaultSelectionComponent = ({ style, ...otherProps }) =>
  <Rect {...otherProps} {...NativeHelpers.getStyle(style)} />;

DefaultSelectionComponent.propTypes = {
  style: PropTypes.object
};

export const selectionContainerMixin = (base) => class VictoryNativeSelectionContainer extends base { // eslint-disable-line max-len
  static defaultProps = Object.assign({}, VictoryContainer.defaultProps, {
    selectionStyle: {
      stroke: "transparent",
      fill: "black",
      fillOpacity: 0.1
    },
    standalone: true,
    selectionComponent: <DefaultSelectionComponent />
  });

  static defaultEvents = (props) => {
    return [{
      target: "parent",
      eventHandlers: {
        onTouchStart: (evt, targetProps) => {
          if (props.disable) {
            return {};
          }
          SelectionHelpers.onMouseMove.cancel();
          return SelectionHelpers.onMouseDown(evt, targetProps);
        },
        onTouchMove: (evt, targetProps) => {
          return props.disable ? {} : SelectionHelpers.onMouseMove(evt, targetProps);
        },
        onTouchEnd: (evt, targetProps) => {
          if (props.disable) {
            return {};
          }
          SelectionHelpers.onMouseMove.cancel();
          return SelectionHelpers.onMouseUp(evt, targetProps);
        }
      }
    }];
  };

  // pass through, so the original container mixin isn't applied twice by combineContainerMixins
  getChildren({ children }) { return children; }
};
