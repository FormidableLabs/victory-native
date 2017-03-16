import React from "react";
import { Path, G, ClipPath, Defs } from "react-native-svg";
import { Voronoi } from "victory-core";
import { NativeHelpers } from "../../index";

export default class extends Voronoi {
  // Overrides method in victory-core
  renderPoint(paths, style, events) {
    const clipId = `clipPath-${Math.random()}`;
    const nativeStyle = NativeHelpers.getStyle(style);
    const { className, role, shapeRendering } = this.props;
    return paths.circle ?
      (
        <G>
          <Defs>
            <ClipPath id={clipId}>
              <Path d={paths.voronoi}/>
            </ClipPath>
          </Defs>
          <Path
            d={paths.circle}
            className={className}
            role={role || "presentation"}
            shapeRendering={shapeRendering || "auto"}
            clipPath={`url(#${clipId})`}
            {...nativeStyle}
            {...events}
          />
        </G>
      ) : (
      <Path
        className={className}
        role={role || "presentation"}
        shapeRendering={shapeRendering || "auto"}
        d={paths.voronoi}
        {...nativeStyle}
        {...events}
      />
    );
  }
}
