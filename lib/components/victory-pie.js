import React from "react";
import { G } from "react-native-svg";
import { Platform } from "react-native";
import { VictoryLabel, VictoryContainer, NativeHelpers, Slice} from "victory-core-native";
import { VictoryPie } from "victory-pie/src";

export default class extends VictoryPie {
  static defaultProps = {
    ...VictoryPie.defaultProps,
    dataComponent: <Slice />,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>
  };

  renderGroup(children, style, offset) {
    const { x, y } = offset;
    const nativeStyle = NativeHelpers.getStyle(style);
    return React.cloneElement(
      this.props.groupComponent,
      Object.assign({ role: "presentation", x, y }, nativeStyle),
      children
    );
  }

  shouldAnimate() {
    return (Platform.OS === "android") ? false : Boolean(this.props.animate);
  }
}
