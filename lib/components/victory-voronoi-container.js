import React from "react";
import { voronoiContainerMixin as voronoiContainerMixinOriginal } from "victory-chart/src";
import { VictoryContainer, VictoryTooltip, NativeVoronoiHelpers } from "../index";
import { combineContainerMixins } from "../helpers/create-container-helpers";

const onTouchStartOrMove = (evt, targetProps) => {
  const mutations = NativeVoronoiHelpers.onTouchMove(evt, targetProps);

  if (mutations.id !== this.mutationId) { // eslint-disable-line
    this.mutationId = mutations.id; // eslint-disable-line
    return mutations.mutations;
  }

  return [];
};

export const voronoiContainerMixin = (base) => class VictoryNativeVoronoiContainer extends base {
  static defaultProps = {
    ...VictoryContainer.defaultProps,
    standalone: true,
    labelComponent: <VictoryTooltip/>,
    voronoiPadding: 5
  };

  static defaultEvents = [{
    target: "parent",
    eventHandlers: {
      onTouchStart: onTouchStartOrMove,
      onTouchMove: onTouchStartOrMove,
      onTouchEnd: (evt, targetProps) => {
        return NativeVoronoiHelpers.onTouchEnd(evt, targetProps);
      }
    }
  }, {
    target: "data",
    eventHandlers: {
      onTouchStart: () => null,
      onTouchMove: () => null,
      onTouchEnd: () => null
    }
  }];

  // pass through, so the original container mixin isn't applied twice by combineContainerMixins
  getChildren({ children }) { return children; }
};

export default combineContainerMixins(
  [voronoiContainerMixinOriginal, voronoiContainerMixin], VictoryContainer
);
