import React from "react";
import { VoronoiHelpers } from "victory-chart/es";
import { VictoryContainer, VictoryTooltip } from "../index";

export const voronoiContainerMixin = (base) => class VictoryNativeVoronoiContainer extends base {
  static defaultProps = Object.assign({}, VictoryContainer.defaultProps, {
    standalone: true,
    labelComponent: <VictoryTooltip/>,
    voronoiPadding: 5
  });

  static defaultEvents = (props) => {
    return [{
      target: "parent",
      eventHandlers: {
        onTouchStart: (evt, targetProps) => {
          return props.disable ? {} : VoronoiHelpers.onMouseMove(evt, targetProps);
        },
        onTouchMove: (evt, targetProps) => {
          return props.disable ? {} : VoronoiHelpers.onMouseMove(evt, targetProps);
        },
        onTouchEnd: (evt, targetProps) => {
          return props.disable ? {} : VoronoiHelpers.onMouseLeave(evt, targetProps);
        }
      }
    }, {
      target: "data",
      eventHandlers: props.disable ? {} : {
        onTouchStart: () => null,
        onTouchMove: () => null,
        onTouchEnd: () => null
      }
    }];
  };

  // pass through, so the original container mixin isn't applied twice by combineContainerMixins
  getChildren({ children }) { return children; }
};
