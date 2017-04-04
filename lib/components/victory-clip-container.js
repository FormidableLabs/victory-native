import React from "react";
import { G } from "react-native-svg";
import { NativeHelpers, ClipPath } from "../index";
import { VictoryClipContainer } from "victory-core";

export default class extends VictoryClipContainer {

  // Overrides method in victory-core
  renderClippedGroup(props, clipId) {
    const { style, events, children, className } = props;
    const nativeStyle = NativeHelpers.getStyle(style);
    const transform = NativeHelpers.getTransform(props.transform);
    const clipComponent = this.renderClipComponent(props, clipId);
    return (
      <G {...nativeStyle} {...events} {...transform} className={className}>
        {clipComponent}
        <G clipPath={`url(#${clipId})`}>
          {children}
        </G>
      </G>
    );
  }

  // Overrides method in victory-core
  renderClipComponent(props, clipId) {
    const { clipPadding, translateX, translateY, clipHeight, clipWidth } = props;
    return (
      <ClipPath
        clipPadding={clipPadding}
        translateX={translateX}
        translateY={translateY}
        clipWidth={clipWidth}
        clipHeight={clipHeight}
        clipId={+clipId}
      />
    );
  }

  // Overrides method in victory-core
  renderGroup(props) {
    const { style, events, children, className } = props;
    const nativeStyle = NativeHelpers.getStyle(style);
    const transform = NativeHelpers.getTransform(props.transform);
    return (
      <G {...nativeStyle} {...events} {...transform} className={className}>
        {children}
      </G>
    );
  }
}
