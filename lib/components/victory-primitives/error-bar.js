import React from "react";
import { Line } from "../../index";
import { G } from "react-native-svg";
import { ErrorBar } from "victory-core/es";

export default class extends ErrorBar {
  static defaultProps = Object.assign({}, ErrorBar.defaultProps, {
    groupComponent: <G/>,
    lineComponent: <Line/>
  });
}
