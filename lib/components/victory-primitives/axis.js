import React from "react";
import { Line } from "../../index";
import { Axis } from "victory-core/es";

export default class extends Axis {
  static defaultProps = {
    ...Axis.defaultProps,
    lineComponent: <Line/>
  }
}
