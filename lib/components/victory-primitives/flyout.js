import React from "react";
import Path from "./path";
import { Flyout } from "victory-tooltip/es";

export default class extends Flyout {
  static defaultProps = Object.assign({}, Flyout.defaultProps, {
    pathComponent: <Path/>
  });
}
