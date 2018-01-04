import React from "react";
import Svg from "react-native-svg";
import { assign, get, omit } from "lodash";
import { View, PanResponder } from "react-native";
import { VictoryContainer } from "victory-core/es";

import { NativeHelpers, Portal } from "../index";

export default class extends VictoryContainer {
  constructor(props) {
    super(props);
    this.panResponder = this.getResponder();
  }

  getResponder() {
    const yes = () => true;
    const no = () => false;
    return PanResponder.create({
      onStartShouldSetPanResponder: yes,

      onStartShouldSetPanResponderCapture: no,

      onMoveShouldSetPanResponder: yes,

      onMoveShouldSetPanResponderCapture: yes,

      onShouldBlockNativeResponder: yes,

      onPanResponderTerminationRequest: yes,
      // User has started a touch move
      onPanResponderGrant: this.handleResponderGrant.bind(this),
      // Active touch or touches have moved
      onPanResponderMove: this.handleResponderMove.bind(this),
      // The user has released all touches
      onPanResponderRelease: this.handleResponderEnd.bind(this),
      // Another component has become the responder
      onPanResponderTerminate: this.handleResponderEnd.bind(this)
    });
  }

  callOptionalEventCallback(eventName, evt) {
    const callback = get(this.props.events, eventName);
    if (callback) {
      evt.persist(); // RN nativeEvent is reused. see https://fb.me/react-event-pooling
      callback(evt, this.props, "__unknownEventKey__", eventName);
    }
  }

  handleResponderGrant(evt) {
    if (this.props.onTouchStart) {
      this.props.onTouchStart(evt);
    }
    this.callOptionalEventCallback("onTouchStart", evt);
  }

  handleResponderMove(evt) {
    const { touches } = evt.nativeEvent;
    if (touches && touches.length === 2) {
      this.callOptionalEventCallback("onTouchPinch", evt);
    } else {
      this.callOptionalEventCallback("onTouchMove", evt);
    }
  }

  handleResponderEnd(evt) {
    if (this.props.onTouchEnd) {
      this.props.onTouchEnd(evt);
    }
    this.callOptionalEventCallback("onTouchEnd", evt);
  }

  // Overrides method in victory-core
  renderContainer(props, svgProps, style) {
    const { title, desc, className, width, height, portalZIndex, responsive } = props;
    const children = this.getChildren(props);
    const dimensions = responsive ? { width: "100%", height: "100%" } : { width, height };
    const baseStyle = NativeHelpers.getStyle(omit(style, ["width", "height"]));
    const divStyle = assign({}, baseStyle, { position: "relative" });
    const portalDivStyle = { zIndex: portalZIndex, position: "absolute", top: 0, left: 0 };
    const portalSvgStyle = assign({ overflow: "visible" }, dimensions);
    const portalProps = { width, height, viewBox: svgProps.viewBox, style: portalSvgStyle };
    return (
      <View {...this.panResponder.panHandlers} style={divStyle} touchAction="box-none"
        className={className} ref={props.containerRef}
      >
        <Svg {...svgProps} style={dimensions}>
          {title ? <title id="title">{title}</title> : null}
          {desc ? <desc id="desc">{desc}</desc> : null}
          {children}
        </Svg>
        <View style={portalDivStyle} touchAction="box-none" pointerEvents="box-none">
          <Portal {...portalProps} ref={this.savePortalRef}/>
        </View>
      </View>
    );
  }
}
