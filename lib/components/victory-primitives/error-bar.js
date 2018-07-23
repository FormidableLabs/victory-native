import React from "react";
import Line from "./line";
import { G } from "react-native-svg";
import { ErrorBar } from "victory-errorbar/es";

export default class extends ErrorBar {
  static defaultProps = Object.assign({}, ErrorBar.defaultProps, {
    groupComponent: <G/>,
    lineComponent: <Line/>
  });
}
