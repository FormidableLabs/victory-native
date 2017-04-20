import React from "react";
import { VoronoiHelpers } from "victory-chart/src";
import { VictoryContainer, VictoryTooltip } from "../index";

const onTouchStartOrMove = (evt, targetProps) => {
  const mutations = VoronoiHelpers.onMouseMove(evt, targetProps);

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
        return VoronoiHelpers.onMouseLeave(evt, targetProps);
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
