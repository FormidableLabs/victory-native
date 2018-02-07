import React from "react";
import { Path, ClipPath, Circle } from "../../index";
import { G } from "react-native-svg";
import { Voronoi } from "victory-core/es";

export default class extends Voronoi {
  static defaultProps = Object.assign({}, Voronoi.defaultProps, {
    groupComponent: <G/>,
    pathComponent: <Path/>,
    clipPathComponent: <ClipPath/>,
    circleComponent: <Circle/>
  });
}
