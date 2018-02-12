import React from "react";
import { CursorHelpers } from "victory-chart/es";
import { VictoryContainer, VictoryLabel, Line } from "../index";

export const cursorContainerMixin = (base) => class VictoryNativeCursorContainer extends base { // eslint-disable-line max-len
  static defaultProps = Object.assign({}, VictoryContainer.defaultProps, {
    cursorLabelComponent: <VictoryLabel/>,
    cursorLabelOffset: {
      x: 5,
      y: -10
    },
    cursorComponent: <Line/>
  });

  static defaultEvents = (props) => {
    return [{
      target: "parent",
      eventHandlers: {
        onTouchMove: (evt, targetProps) => {
          return props.disable ? {} : CursorHelpers.onMouseMove(evt, targetProps);
        },
        onTouchEnd: () => {
          return [];
        }
      }
    }];
  };

  // pass through, so the original container mixin isn't applied twice by combineContainerMixins
  getChildren({ children }) { return children; }
};
