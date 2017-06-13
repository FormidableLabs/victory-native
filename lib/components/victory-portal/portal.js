import React from "react";
import { G } from "react-native-svg";
import { Portal } from "victory-core/src";

export default class extends Portal {
  static defaultProps = {
    ...Portal.defaultProps,
    groupComponent: <G/>
  };

  render() {
    return React.cloneElement(
      this.props.groupComponent,
      {},
      Object.keys(this.map).map((key) => {
        const el = this.map[key];
        return el ? React.cloneElement(el, { key }) : <G/>;
      })
    );
  }
}
