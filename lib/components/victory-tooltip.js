import React from "react";
import { G } from "react-native-svg";
import { VictoryTooltip } from "victory-core/src";

import VictoryLabel from "./victory-label";
import { VictoryPortal, Flyout } from "../index";

export default class extends VictoryTooltip {
  static defaultProps = {
    ...VictoryTooltip.defaultProps,
    labelComponent: <VictoryLabel/>,
    flyoutComponent: <Flyout/>,
    groupComponent: <G/>
  };

  static defaultEvents = [{
    target: "data",
    eventHandlers: {
      onPressIn: () => {
        return {
          target: "labels",
          mutation: () => {
            return { active: true };
          }
        };
      },
      onPressOut: () => {
        return {
          target: "labels",
          mutation: () => {
            return { active: false };
          }
        };
      }
    }
  }];

  render() {
    const { active, renderInPortal } = this.props;
    const tooltip = active ? this.renderTooltip(this.props) : <G/>;
    return renderInPortal ? <VictoryPortal>{tooltip}</VictoryPortal> : tooltip;
  }
}
