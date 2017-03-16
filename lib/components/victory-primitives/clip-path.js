import React from "react";
import { ClipPath as Clip, Rect, Defs } from "react-native-svg";
import { ClipPath } from "victory-core";

export default class extends ClipPath {
  // Overrides method in victory-core
  renderClipPath(props, id) {
    return (
      <Defs>
        <Clip id={`${id}`}>
          <Rect {...props}/>
        </Clip>
      </Defs>
    );
  }
}
