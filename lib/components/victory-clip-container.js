import React from "react";
import { G } from "react-native-svg";
import Circle from "./victory-primitives/circle";
import Rect from "./victory-primitives/rect";
import ClipPath from "./victory-primitives/clip-path";
import { VictoryClipContainer } from "victory-core/es";

export default class extends VictoryClipContainer {
  static defaultProps = Object.assign({}, VictoryClipContainer.defaultProps, {
    groupComponent: <G/>,
    rectComponent: <Rect/>,
    clipPathComponent: <ClipPath/>,
    circleComponent: <Circle/>
  });
}
