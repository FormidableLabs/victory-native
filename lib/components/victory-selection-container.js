import React from "react";
import { Rect } from "react-native-svg";
import { selectionContainerMixin as selectionContainerMixinOriginal } from "victory-chart/src";
import { VictoryContainer, NativeSelectionHelpers, NativeHelpers } from "../index";
import { combineContainerMixins } from "../helpers/create-container";

// ensure the selection component get native styles
const DefaultSelectionComponent = ({style, ...otherProps}) =>
  <Rect {...otherProps} {...NativeHelpers.getStyle(style)} />;

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
        NativeSelectionHelpers.onTouchMove.cancel();
        return NativeSelectionHelpers.onTouchStart(evt, targetProps);
      },
      onTouchMove: (evt, targetProps) => {
        return NativeSelectionHelpers.onTouchMove(evt, targetProps);
      },
      onTouchEnd: (evt, targetProps) => {
        NativeSelectionHelpers.onTouchMove.cancel();
        return NativeSelectionHelpers.onTouchEnd(evt, targetProps);
      }
    }
  }];
};

export default combineContainerMixins(selectionContainerMixinOriginal, selectionContainerMixin);
