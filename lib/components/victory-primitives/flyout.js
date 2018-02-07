import React from "react";
import { Path } from "../../index";
import { Flyout } from "victory-core/es";

export default class extends Flyout {
  static defaultProps = Object.assign({}, Flyout.defaultProps, {
    pathComponent: <Path/>
  });
}
