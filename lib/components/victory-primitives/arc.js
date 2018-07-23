import React from "react";
import Path from "./path";
import { Arc } from "victory-core/es";

export default class extends Arc {
  static defaultProps = Object.assign({}, Arc.defaultProps, {
    pathComponent: <Path/>
  });
}
