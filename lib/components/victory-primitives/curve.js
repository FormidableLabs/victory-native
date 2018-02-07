import React from "react";
import { Path } from "../../index";
import { Curve } from "victory-core/es";

export default class extends Curve {
  static defaultProps = {
    ...Curve.defaultProps,
    pathComponent: <Path/>
  }
}
