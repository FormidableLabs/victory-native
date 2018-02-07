import React from "react";
import { Rect } from "../../index";
import { Border } from "victory-core/es";

export default class extends Border {
  static defaultProps = {
    ...Border.defaultProps,
    rectComponent: <Rect/>
  }
}
