import React from "react";
import { G } from "react-native-svg";
import { Platform } from "react-native";
import { VictoryPie } from "victory-pie/src";

import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import { NativeHelpers, Slice } from "../index";

export default class extends VictoryPie {
  static defaultProps = {
    ...VictoryPie.defaultProps,
    dataComponent: <Slice/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>
  };

    // Overrides method in victory-pie
  renderGroup(props, children) {
    const {x, y} = this.getOffset(props);
    const groupComponent = React.cloneElement(props.groupComponent, {x, y});
    return this.renderContainer(groupComponent, children);
  }

  shouldAnimate() {
    return (Platform.OS === "android") ? false : Boolean(this.props.animate);
  }
}
