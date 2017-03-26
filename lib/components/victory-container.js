import React from "react";
import Svg from "react-native-svg";
import { VictoryContainer } from "victory-core/src";
import { NativeHelpers } from "../index";
import { Portal } from "../index";

export default class extends VictoryContainer {
  // Overrides method in victory-core
  renderContainer(props, svgProps, style) {
    const { children, className } = props;
    const nativeStyle = NativeHelpers.getStyle(style);
    return (
      <Svg {...nativeStyle} {...svgProps} className={className}>
        {children}
        <Portal ref={this.savePortalRef}/>
      </Svg>
    );
  }

  // Overrides method in victory-core
  // renderContainer(props, svgProps, style) {
  //   const { title, desc, portalComponent, className, standalone } = props;
  //   const nativeStyle = NativeHelpers.getStyle(style);
  //   const children = this.getChildren(props);
  //   const parentProps = Object.assign({className}, svgProps, nativeStyle);
  //   const groupComponent = props.groupComponent || <G/>;
  //   return standalone !== false ?
  //     (
  //       <Svg {...parentProps}>
  //         {title ? <title id="title">{title}</title> : null}
  //         {desc ? <desc id="desc">{desc}</desc> : null}
  //         {children}
  //         <Portal ref={this.savePortalRef}/>
  //       </Svg>
  //     ) :
  //     React.cloneElement(groupComponent, parentProps, children);
  // }
}
