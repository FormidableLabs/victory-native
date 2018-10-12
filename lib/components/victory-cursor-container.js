import React from "react";
import { flow, isFunction } from "lodash";
import {
  VictoryCursorContainer, CursorHelpers, cursorContainerMixin as originalCursorMixin
} from "victory-cursor-container";
import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import LineSegment from "./victory-primitives/line-segment";

const nativeCursorMixin = (base) => class VictoryNativeCursorContainer extends base {
  static displayName = "VictoryCursorContainer";
  // assign native specific defaultProps over web `VictoryCursorContainer` defaultProps
  static defaultProps = {
    ...VictoryCursorContainer.defaultProps,
    cursorLabelComponent: <VictoryLabel/>,
    cursorComponent: <LineSegment/>
  };

  // overrides all web events with native specific events
  static defaultEvents = (props) => {
    return [{
      target: "parent",
      eventHandlers: {
        onTouchMove: (evt, targetProps) => {
          return props.disable ? {} : CursorHelpers.onMouseMove(evt, targetProps);
        },
        onTouchEnd: (evt, targetProps) => {
          if (isFunction(targetProps.onCursorChange)) {
            targetProps.onCursorChange(null, targetProps);
          }

          return [{
            target: "parent",
            eventKey: "parent",
            mutation: () => ({ cursorValue: null })
          }];
        }
      }
    }];
  };
};

const combinedMixin = flow(originalCursorMixin, nativeCursorMixin);

export const cursorContainerMixin = (base) => combinedMixin(base);

export default cursorContainerMixin(VictoryContainer);
