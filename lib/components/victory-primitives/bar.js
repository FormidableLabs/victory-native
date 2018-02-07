import React from "react";
import { Path } from "../../index";
import { Bar } from "victory-core/es";

export default class extends Bar {
  static defaultProps = {
    ...Bar.defaultProps,
    pathComponent: <Path/>
  }
}
