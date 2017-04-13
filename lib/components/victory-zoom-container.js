import React from "react";
import { zoomContainerMixin as zoomContainerMixinOriginal } from "victory-chart/src";
import { VictoryContainer, VictoryClipContainer, NativeZoomHelpers } from "../index";
import { combineContainerMixins } from "../helpers/create-container";

export const zoomContainerMixin = (base) => class VictoryNativeZoomContainer extends base {
  static defaultProps = {
    ...VictoryContainer.defaultProps,
    clipContainerComponent: <VictoryClipContainer/>,
    allowZoom: true
  };

  static defaultEvents = [{
    target: "parent",
    eventHandlers: {
      onTouchStart: (evt, targetProps, eventKey, ctx) => { // eslint-disable-line max-params
        return NativeZoomHelpers.onTouchStart(evt, targetProps, eventKey, ctx);
      },
      onTouchMove: (evt, targetProps, eventKey, ctx) => { // eslint-disable-line max-params
        return NativeZoomHelpers.onTouchMove(evt, targetProps, eventKey, ctx);
      },
      onTouchEnd: (evt, targetProps, eventKey, ctx) => { // eslint-disable-line max-params
        return NativeZoomHelpers.onTouchEnd(evt, targetProps, eventKey, ctx);
      },
      onTouchPinch: (evt, targetProps, eventKey, ctx) => { // eslint-disable-line max-params
        return NativeZoomHelpers.onTouchPinch(evt, targetProps, eventKey, ctx);
      }
    }
  }];
};

export default combineContainerMixins(zoomContainerMixinOriginal, zoomContainerMixin);
