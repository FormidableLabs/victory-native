import React from "react";
import { CursorHelpers } from "victory-chart/src";
import { VictoryContainer, VictoryLabel, Line } from "../index";

export const cursorContainerMixin = (base) => class VictoryNativeCursorContainer extends base { // eslint-disable-line max-len
  static defaultProps = {
    ...VictoryContainer.defaultProps,
    cursorLabelComponent: <VictoryLabel/>,
    cursorLabelOffset: {
      x: 5,
      y: -10
    },
    cursorComponent: <Line/>
  };

  static defaultEvents = [{
    target: "parent",
    eventHandlers: {
      onTouchMove: (evt, targetProps) => {
        const mutations = CursorHelpers.onMouseMove(evt, targetProps);

        if (mutations.id !== this.touchMoveMutationId) { // eslint-disable-line
          this.touchMoveMutationId = mutations.id; // eslint-disable-line
          return mutations.mutations;
        }

        return [];
      },
      onTouchEnd: () => {
        return [];
      }
    }
  }];

  // pass through, so the original container mixin isn't applied twice by combineContainerMixins
  getChildren({ children }) { return children; }
};
