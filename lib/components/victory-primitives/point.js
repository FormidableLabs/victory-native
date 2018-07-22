import React from "react";
import Path from "./path";
import { Point } from "victory-core/es";

export default class extends Point {
  static defaultProps = Object.assign({}, Point.defaultProps, {
    pathComponent: <Path/>
  });
}
