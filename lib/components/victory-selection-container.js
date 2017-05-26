import React from "react";
import PropTypes from "prop-types";
import { Rect } from "react-native-svg";
import { SelectionHelpers } from "victory-chart/src";
import { VictoryContainer, NativeHelpers } from "../index";

// ensure the selection component get native styles
const DefaultSelectionComponent = ({ style, ...otherProps }) =>
  <Rect {...otherProps} {...NativeHelpers.getStyle(style)} />;

DefaultSelectionComponent.propTypes = {
  style: PropTypes.object
};

export const selectionContainerMixin = (base) => class VictoryNativeSelectionContainer extends base { // eslint-disable-line max-len
  static defaultProps = {
    ...VictoryContainer.defaultProps,
    selectionStyle: {
      stroke: "transparent",
      fill: "black",
      fillOpacity: 0.1
    },
    standalone: true,
    selectionComponent: <DefaultSelectionComponent />
  };

  static defaultEvents = [{
    target: "parent",
    eventHandlers: {
      onTouchStart: (evt, targetProps) => {
        SelectionHelpers.onMouseMove.cancel();
        return SelectionHelpers.onMouseDown(evt, targetProps);
      },
      onTouchMove: (evt, targetProps) => {
        const mutations = SelectionHelpers.onMouseMove(evt, targetProps);

        if (mutations.id !== this.touchMoveMutationId) { // eslint-disable-line
          this.touchMoveMutationId = mutations.id; // eslint-disable-line
          return mutations.mutations;
        }

        return [];
      },
      onTouchEnd: (evt, targetProps) => {
        SelectionHelpers.onMouseMove.cancel();
        return SelectionHelpers.onMouseUp(evt, targetProps);
      }
    }
  }];

  // pass through, so the original container mixin isn't applied twice by combineContainerMixins
  getChildren({ children }) { return children; }
};
