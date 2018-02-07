import React from "react";
import { G } from "react-native-svg";
import { ClipPath, Circle, Rect } from "../index";
import { VictoryClipContainer } from "victory-core/es";

export default class extends VictoryClipContainer {
  static defaultProps = Object.assign({}, VictoryClipContainer.defaultProps, {
    groupComponent: <G/>,
    rectComponent: <Rect/>,
    clipPathComponent: <ClipPath/>,
    circleComponent: <Circle/>
  });
}
