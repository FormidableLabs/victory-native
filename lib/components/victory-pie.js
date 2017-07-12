import React from "react";
import { G } from "react-native-svg";
import { VictoryPie } from "victory-pie/src";

import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import { Slice } from "../index";

export default class extends VictoryPie {
  static defaultProps = {
    ...VictoryPie.defaultProps,
    dataComponent: <Slice/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>
  };
}
