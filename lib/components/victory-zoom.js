/*eslint-disable no-magic-numbers*/

import React from "react";
import { View, PanResponder, StyleSheet, Dimensions } from "react-native";
import { VictoryZoom } from "victory-chart/src";
import ZoomHelpers from "victory-chart/src/components/victory-zoom/helper-methods";

import VictoryClipContainer from "./victory-clip-container";

const styles = StyleSheet.create({
  responder: {
    flex: 1,
    alignItems: "center"
  }
});

export default class extends VictoryZoom {

  static defaultProps = {
    ...VictoryZoom.defaultProps,
    clipContainerComponent: <VictoryClipContainer />
  }

  constructor(props) {
    super(props);
    this.panResponder = this.getResponder();
  }

  // override default VictoryZoom events, we will handle touches
  // via a PanResponder instead. See getResponder() below
  getEvents() {
    return [];
  }

  // configure a PanResponder
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

  handleResponderGrant() {
    this.targetBounds = { left: 0, width: this.chartRef.props.width };
    this.lastDomain = this.previousDomain = this.state.domain;
    this.isPanning = true;
  }

  handleResponderMove(evt, gestureState) {
    const { touches } = evt.nativeEvent;
    if (touches && touches.length === 2) {
      this.handlePinchZoom(touches[0].locationX, touches[1].locationX);
    } else if (this.isPanning) {
      this.handlePan(gestureState.dx);
    }
  }

  handleResponderEnd() {
    this.isPanning = false;
    this.pinchState = null;
  }

  handlePinchZoom(x1, x2) {
    const currentDistance = Math.abs(x1 - x2);
    const pinchState = this.pinchState || (this.pinchState = {
      initialDomain: this.lastDomain,
      initialDistance: currentDistance
    });

    const windowWidth = Dimensions.get("window").width;
    const distanceDelta = currentDistance - pinchState.initialDistance;

    // when zooming out, apply a multiplier to the scale factor to make
    // the zoom-out velocity match the equivalent zoom-in velocity
    let scaleMultiplier = 1;
    if (distanceDelta < 0) {
      const [initialStart, initialEnd] = pinchState.initialDomain.x;
      const [dataStart, dataEnd] = this.getDataDomain().x;
      if (initialStart !== initialEnd) {
        scaleMultiplier = Math.abs(dataEnd - dataStart) / Math.abs(initialEnd - initialStart);
      }
    }

    const scaleFactor = 1 - ((distanceDelta / windowWidth) * scaleMultiplier);
    const nextXDomain = ZoomHelpers.scale(
      pinchState.initialDomain.x,
      this.getDataDomain().x,
      scaleFactor
    );
    this.setDomain({x: nextXDomain});
  }

  handlePan(deltaX) {
    const calculatedDx = -(deltaX / this.getDomainScale());
    const nextXDomain = ZoomHelpers.pan(
      this.lastDomain.x,
      this.getDataDomain().x,
      calculatedDx
    );
    this.setDomain({x: nextXDomain});
  }

  renderChart(chartElement, props) {
    return (
      <View {...this.panResponder.panHandlers} style={styles.responder}>
        {React.cloneElement(chartElement, props)}
      </View>
    );
  }
}
