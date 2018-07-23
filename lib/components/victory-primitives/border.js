import React from "react";
import Rect from "./rect";
import { Border } from "victory-core/es";

export default class extends Border {
  static defaultProps = Object.assign({}, Border.defaultProps, {
    rectComponent: <Rect/>
  });
}
