import React from "react";
import Svg, { G } from "react-native-svg";
import { get } from "lodash";
import { View, PanResponder } from "react-native";
import { VictoryContainer } from "victory-core/src";

import { NativeHelpers } from "../index";
import { Portal } from "../index";

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
    const { className, title, desc, standalone } = props;
    const nativeStyle = NativeHelpers.getStyle(style);
    const children = this.getChildren(props);
    const groupComponent = props.groupComponent || <G/>;
    const parentProps = Object.assign({className}, nativeStyle, svgProps);
    return standalone !== false ?
      (
        <View {...this.panResponder.panHandlers}>
          <Svg {...parentProps}>
            {title ? <title id="title">{title}</title> : null}
            {desc ? <desc id="desc">{desc}</desc> : null}
            {children}
            <Portal ref={this.savePortalRef}/>
          </Svg>
        </View>
      ) : React.cloneElement(groupComponent, parentProps, children);
  }
}
