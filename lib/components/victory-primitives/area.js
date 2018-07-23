import React from "react";
import Path from "./path";
import { G } from "react-native-svg";
import { Area } from "victory-area/es";

export default class extends Area {
  static defaultProps = Object.assign({}, Area.defaultProps, {
    groupComponent: <G/>,
    pathComponent: <Path/>
  });
}
