import React from "react";
import { Path } from "../../index";
import { Arc } from "victory-core/es";

export default class extends Arc {
  static defaultProps = {
    ...Arc.defaultProps,
    pathComponent: <Path/>
  }
}
