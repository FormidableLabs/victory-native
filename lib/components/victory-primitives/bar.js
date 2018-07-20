import React from "react";
import { Path } from "../../index";
import { Bar } from "victory-bar/es";

export default class extends Bar {
  static defaultProps = Object.assign({}, Bar.defaultProps, {
    pathComponent: <Path/>
  });
}
