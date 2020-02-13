import React from "react";
import Svg, { Polygon } from "react-native-svg";

export default () => (
  <Svg width={10} height={15} viewBox="0 0 10 15">
    <Polygon
      fill="#d1d1d6"
      // eslint-disable-next-line max-len
      points="9.14213562 7.07106781 2.07106781 14.1421356 0.656854249 12.7279221 6.3137085 7.07106781 0.656854249 1.41421356 2.07106781 0"
    />
  </Svg>
);
