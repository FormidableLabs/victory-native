import React from "react";
import { VictoryLabel } from "victory-core/es";
import Text from "./victory-primitives/text";
import TSpan from "./victory-primitives/tspan";

const NativeVictoryLabel = (props) => (
  <VictoryLabel
    textComponent={<Text/>}
    tspanComponent={<TSpan/>}
    {...props}
  />
);

NativeVictoryLabel.role = VictoryLabel.role;

export default NativeVictoryLabel;
