import React from "react";
import Path from "./path";
import ClipPath from "./clip-path";
import Circle from "./circle";
import { G } from "react-native-svg";
import { Voronoi } from "victory-voronoi/es";

export default class extends Voronoi {
  static defaultProps = Object.assign({}, Voronoi.defaultProps, {
    groupComponent: <G/>,
    pathComponent: <Path/>,
    clipPathComponent: <ClipPath/>,
    circleComponent: <Circle/>
  });
}
