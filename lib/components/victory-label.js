import React from "react";
import { VictoryLabel } from "victory-core/es";
import { Text, TSpan } from "../index";

export default class extends VictoryLabel {
  static defaultProps = {
    ...VictoryLabel.defaultProps,
    textComponent: <Text/>,
    tspanComponent: <TSpan/>,
    capHeight: 0.71,
    lineHeight: 1
  };
}
