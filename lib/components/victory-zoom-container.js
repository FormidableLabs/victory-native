import React from "react";
import { VictoryContainer, VictoryClipContainer, NativeZoomHelpers } from "../index";

export const zoomContainerMixin = (base) => class VictoryNativeZoomContainer extends base {
  static defaultProps = Object.assign({}, VictoryContainer.defaultProps, {
    clipContainerComponent: <VictoryClipContainer/>,
    allowZoom: true,
    allowPan: true,
    zoomActive: false
  });

  static defaultEvents = (props) => {
    const { disable } = props;
    return [{
      target: "parent",
      eventHandlers: {
        onTouchStart: (evt, targetProps, eventKey, ctx) => { // eslint-disable-line max-params
          return disable ? {} : NativeZoomHelpers.onTouchStart(evt, targetProps, eventKey, ctx);
        },
        onTouchMove: (evt, targetProps, eventKey, ctx) => { // eslint-disable-line max-params
          return disable ? {} : NativeZoomHelpers.onTouchMove(evt, targetProps, eventKey, ctx);
        },
        onTouchEnd: (evt, targetProps, eventKey, ctx) => { // eslint-disable-line max-params
          return disable ? {} : NativeZoomHelpers.onTouchEnd(evt, targetProps, eventKey, ctx);
        },
        onTouchPinch: (evt, targetProps, eventKey, ctx) => { // eslint-disable-line max-params
          return disable ? {} : NativeZoomHelpers.onTouchPinch(evt, targetProps, eventKey, ctx);
        }
      }
    }];
  };

  // pass through, so the original container mixin isn't applied twice by combineContainerMixins
  getChildren({ children }) { return children; }
};
