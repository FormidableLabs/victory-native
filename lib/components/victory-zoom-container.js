import React, {PropTypes} from "react";
import { defaults, isEqual } from "lodash";
import { PropTypes as CustomPropTypes } from "victory-core/src";
import { VictoryContainer, VictoryClipContainer, NativeZoomHelpers } from "../index";

export const zoomContainerMixin = (base) => class VictoryNativeZoomContainer extends base {
  static displayName = "VictoryZoomContainer";
  static propTypes = {
    ...VictoryContainer.propTypes,
    zoomDomain: PropTypes.shape({
      x: CustomPropTypes.domain,
      y: CustomPropTypes.domain
    }),
    minimumZoom: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    onDomainChange: PropTypes.func,
    clipContainerComponent: PropTypes.element.isRequired,
    allowZoom: PropTypes.bool,
    dimension: PropTypes.oneOf(["x", "y"])
  };

  static defaultProps = {
    ...VictoryContainer.defaultProps,
    clipContainerComponent: <VictoryClipContainer/>,
    allowZoom: true
  };

  static defaultEvents = [{
    target: "parent",
    eventHandlers: {
      onTouchStart: (evt, targetProps, eventKey, ctx) => { // eslint-disable-line max-params
        return NativeZoomHelpers.onTouchStart(evt, targetProps, eventKey, ctx);
      },
      onTouchMove: (evt, targetProps, eventKey, ctx) => { // eslint-disable-line max-params
        return NativeZoomHelpers.onTouchMove(evt, targetProps, eventKey, ctx);
      },
      onTouchEnd: (evt, targetProps, eventKey, ctx) => { // eslint-disable-line max-params
        return NativeZoomHelpers.onTouchEnd(evt, targetProps, eventKey, ctx);
      },
      onTouchPinch: (evt, targetProps, eventKey, ctx) => { // eslint-disable-line max-params
        return NativeZoomHelpers.onTouchPinch(evt, targetProps, eventKey, ctx);
      }
    }
  }];

  clipDataComponents(children, props) { //eslint-disable-line max-statements
    const { scale, clipContainerComponent } = props;
    const rangeX = scale.x.range();
    const rangeY = scale.y.range();
    const plottableWidth = Math.abs(rangeX[0] - rangeX[1]);
    const plottableHeight = Math.abs(rangeY[0] - rangeY[1]);
    const childComponents = [];
    let group = [];
    let groupNumber = 0;

    const makeGroup = (arr, index) => {
      return Array.isArray(arr) && arr.length ?
        React.cloneElement(clipContainerComponent, {
          key: `ZoomClipContainer-${index}`,
          clipWidth: plottableWidth,
          clipHeight: plottableHeight,
          translateX: Math.min(...rangeX),
          translateY: Math.min(...rangeY),
          children: arr
        }) :
        null;
    };

    const findNextAxis = (start) => {
      const subset = children.slice(start);
      return subset.findIndex((child) => child.type.displayName === "VictoryAxis") + start;
    };

    let axisIndex = findNextAxis(0);

    if (axisIndex === -1) {
      return makeGroup(children, groupNumber);
    }
    for (let i = 0, len = children.length; i < len; i++) {
      if (i === axisIndex) {
        childComponents.push(makeGroup(group, groupNumber), children[i]);
        axisIndex = findNextAxis(i + 1);
        group = [];
        groupNumber++;
      } else {
        group.push(children[i]);
      }
    }
    childComponents.push(makeGroup(group, groupNumber));
    return childComponents.filter(Boolean);
  }

  modifyChildren(props) {
    const childComponents = React.Children.toArray(props.children);

    return childComponents.map((child) => {
      const {currentDomain} = props;
      const originalDomain = defaults({}, props.original, props.domain);
      const zoomDomain = defaults({}, props.zoomDomain, props.domain);
      const cachedZoomDomain = defaults({}, props.cachedZoomDomain, props.domain);
      const domain = isEqual(zoomDomain, cachedZoomDomain) ?
        defaults({}, currentDomain, originalDomain) : zoomDomain;
      return React.cloneElement(
        child, defaults({domain}, child.props)
      );
    });
  }

  // Overrides method in VictoryContainer
  getChildren(props) {
    const children = this.modifyChildren(props);
    return this.clipDataComponents(children, props);
  }
};

export default zoomContainerMixin(VictoryContainer);
