import React from "react";
import Svg, { G } from "react-native-svg";
import { VictoryContainer } from "victory-core/src";
import { NativeHelpers } from "../index";
import { Portal } from "../index";

export default class extends VictoryContainer {
  // Overrides method in victory-core
  renderContainer(props, svgProps, style) {
    const { className, title, desc, standalone } = props;
    const nativeStyle = NativeHelpers.getStyle(style);
    const children = this.getChildren(props);
    const groupComponent = props.groupComponent || <G/>;
    const parentProps = Object.assign({className}, nativeStyle, svgProps);
    return standalone !== false ?
      (
        <Svg {...parentProps}>
          {title ? <title id="title">{title}</title> : null}
          {desc ? <desc id="desc">{desc}</desc> : null}
          {children}
          <Portal ref={this.savePortalRef}/>
        </Svg>
      ) :  React.cloneElement(groupComponent, parentProps, children);
  }
}
