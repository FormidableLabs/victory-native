import React from "react";
import { Path } from "../../index";
import { Point } from "victory-core/es";

export default class extends Point {
  static defaultProps = {
    ...Point.defaultProps,
    pathComponent: <Path/>
  }
}
