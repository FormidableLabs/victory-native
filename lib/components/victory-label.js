import React from "react";
import { VictoryLabel } from "victory-core/es";
import Text from "./victory-primitives/text";
import TSpan from "./victory-primitives/tspan";

export default class extends VictoryLabel {
  static defaultProps = Object.assign({}, VictoryLabel.defaultProps, {
    textComponent: <Text/>,
    tspanComponent: <TSpan/>
  });
}
