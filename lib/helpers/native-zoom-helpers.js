import { throttle, isFunction, defaults } from "lodash";
import { Dimensions } from "react-native";
import { Selection, Collection } from "victory-core/src";

const hypotenuse = (x, y) => Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

const screenSize = hypotenuse(Dimensions.get("window").width, Dimensions.get("window").height);

const VictoryZoomHelpers = {
  // unchanged methods from victory-chart's zoom-helpers. copied here as they are not exported
  /**
   * Generates a new domain scaled by factor and constrained by the original domain.
   * @param  {[Number, Number]} currentDomain  The domain to be scaled.
   * @param  {Object} evt the event object
   * @param  {Object} props the props of the targeted component
   * @param  {String} axis the desired dimension (either x or y)
   * @return {[Number, Number]}                The scale domain
   */
  scale(currentDomain, evt, props, axis) { // eslint-disable-line max-params
    const [from, to] = currentDomain;
    const range = Math.abs(to - from);
    const minimumZoom = props.minimumZoom && props.minimumZoom[axis];
    const factor = this.getScaleFactor(evt);
    if (minimumZoom && range <= minimumZoom && factor < 1) {
      return currentDomain;
    }
    const [fromBound, toBound] = this.getDomain(props)[axis];
    const percent = this.getScalePercent(evt, props, axis);
    const point = (factor * from) + percent * (factor * range);
    const minDomain = this.getMinimumDomain(point, props, axis);
    const [newMin, newMax] = this.getScaledDomain(currentDomain, factor, percent);
    const newDomain = [
      newMin > fromBound && newMin < toBound ? newMin : fromBound,
      newMax < toBound && newMax > fromBound ? newMax : toBound
    ];
    const domain = Math.abs(minDomain[1] - minDomain[0]) > Math.abs(newDomain[1] - newDomain[0]) ?
      minDomain : newDomain;
    return Collection.containsDates([fromBound, toBound]) ?
      [ new Date(domain[0]), new Date(domain[1]) ] : domain;
  },

  getScaledDomain(currentDomain, factor, percent) {
    const [from, to] = currentDomain;
    const range = Math.abs(to - from);
    const diff = range - (range * factor);
    const newMin = +from + (diff * percent);
    const newMax = +to - (diff * (1 - percent));
    return [ Math.min(newMin, newMax), Math.max(newMin, newMax) ];
  },

  getMinimumDomain(point, props, axis) {
    const {minimumZoom } = props;
    const originalDomain = this.getDomain(props)[axis];
    const [from, to] = originalDomain;
    const defaultMin = Math.abs(from - to) / 1000;
    const extent = minimumZoom ? minimumZoom[axis] || defaultMin : defaultMin;
    const minExtent = point - (extent / 2);
    const maxExtent = point + (extent / 2);
    return [
      minExtent > from && minExtent < to ? minExtent : from,
      maxExtent < to && maxExtent > from ? maxExtent : +from + extent / 2
    ];
  },

  getScaleFactor(evt) {
    const sign = evt.deltaY > 0 ? 1 : -1;
    const delta = Math.min(Math.abs(evt.deltaY / 300), 0.5); // TODO: Check scale factor
    return Math.abs(1 + sign * delta);
  },

  getScalePercent(evt, props, axis) {
    const originalDomain = this.getDomain(props);
    const [from, to] = originalDomain[axis];
    const position = this.getPosition(evt, props, originalDomain);
    return (position[axis] - from) / Math.abs(to - from);
  },

  getPosition(evt, props, originalDomain) {
    const {x, y} = Selection.getSVGEventCoordinates(evt);
    const originalScale = {
      x: props.scale.x.domain(originalDomain.x),
      y: props.scale.y.domain(originalDomain.y)
    };
    return Selection.getDataCoordinates(originalScale, x, y);
  },
  /**
   * Generate a new domain translated by the delta and constrained by the original domain.
   * @param  {[Number, Number]} currentDomain  The domain to be translated.
   * @param  {[Number, Number]} originalDomain The original domain for the data set.
   * @param  {Number}           delta          The delta to translate by
   * @return {[Number, Number]}                The translated domain
   */
  pan(currentDomain, originalDomain, delta) {
    const [fromCurrent, toCurrent] = currentDomain.map((val) => +val);
    const [fromOriginal, toOriginal] = originalDomain.map((val) => +val);
    const lowerBound = fromCurrent + delta;
    const upperBound = toCurrent + delta;
    let newDomain;
    if (lowerBound > fromOriginal && upperBound < toOriginal) {
      newDomain = [lowerBound, upperBound];
    } else if (lowerBound < fromOriginal) { // Clamp to lower limit
      const dx = toCurrent - fromCurrent;
      newDomain = [fromOriginal, fromOriginal + dx];
    } else if (upperBound > toOriginal) { // Clamp to upper limit
      const dx = toCurrent - fromCurrent;
      newDomain = [toOriginal - dx, toOriginal];
    } else {
      newDomain = currentDomain;
    }
    return Collection.containsDates(currentDomain) || Collection.containsDates(originalDomain) ?
      newDomain.map((val) => new Date(val)) : newDomain;
  },
  getDomainScale(domain, scale, axis) {
    const axisDomain = Array.isArray(domain) ? domain : domain[axis];
    const [from, to] = axisDomain;
    const range = scale[axis].range();
    const plottableWidth = Math.abs(range[0] - range[1]);
    return plottableWidth / (to - from);
  },

  handleAnimation(ctx) {
    const getTimer = isFunction(ctx.getTimer) && ctx.getTimer.bind(ctx);
    if (getTimer && isFunction(getTimer().bypassAnimation)) {
      getTimer().bypassAnimation();
      if (isFunction(getTimer().resumeAnimation)) {
        return () => getTimer().resumeAnimation();
      }
    }
    return undefined;
  },

  getDomain(props) {
    const {originalDomain, domain, scale} = props;
    const scaleDomain = { x: scale.x.domain(), y: scale.y.domain() };
    return defaults({}, originalDomain, domain, scaleDomain);
  }
};

const Helpers = {
  ...VictoryZoomHelpers,
  onTouchStart(evt, targetProps) {
    const {domain, zoomDomain} = targetProps;
    const originalDomain = this.getDomain(targetProps);
    const currentDomain = defaults(
      {}, targetProps.currentDomain || zoomDomain || originalDomain, domain
    );
    const {x, y} = Selection.getSVGEventCoordinates(evt);
    return [{
      target: "parent",
      mutation: () => {
        return {
          startX: x, startY: y, domain: currentDomain, cachedZoomDomain: zoomDomain,
          originalDomain, currentDomain, panning: true,
          parentControlledProps: ["domain"]
        };
      }
    }];
  },
  onTouchEnd() {
    return [{
      target: "parent",
      mutation: () => {
        return {panning: false, originalPinchDistance: null};
      }
    }];
  },
  onTouchMove(evt, targetProps, eventKey, ctx) { // eslint-disable-line max-params
    if (targetProps.panning) {
      const { scale, startX, startY, onDomainChange, dimension, domain, zoomDomain } = targetProps;
      const { x, y } = Selection.getSVGEventCoordinates(evt);
      const originalDomain = this.getDomain(targetProps);
      const lastDomain = defaults(
        {}, targetProps.currentDomain || zoomDomain || originalDomain, domain
      );
      const dx = (startX - x) / this.getDomainScale(lastDomain, scale, "x");
      const dy = (y - startY) / this.getDomainScale(lastDomain, scale, "y");
      const currentDomain = {
        x: dimension === "y" ? originalDomain.x : this.pan(lastDomain.x, originalDomain.x, dx),
        y: dimension === "x" ? originalDomain.y : this.pan(lastDomain.y, originalDomain.y, dy)
      };
      const resumeAnimation = this.handleAnimation(ctx);
      if (isFunction(onDomainChange)) {
        onDomainChange(currentDomain);
      }
      return [{
        target: "parent",
        callback: resumeAnimation,
        mutation: () => {
          return {
            parentControlledProps: ["domain"], startX: x, startY: y,
            domain: currentDomain, currentDomain, originalDomain, cachedZoomDomain: zoomDomain
          };
        }
      }];
    }
    return [];
  },
  onTouchPinch(evt, targetProps, eventKey, ctx) { // eslint-disable-line max-params
    const { onDomainChange, dimension, domain, zoomDomain } = targetProps;
    const { touches } = evt.nativeEvent;
    if (!targetProps.allowZoom) {
      return {};
    }
    const originalDomain = this.getDomain(targetProps);
    const lastDomain = defaults(
      {}, targetProps.currentDomain || zoomDomain || originalDomain, domain
    );
    const {x, y} = lastDomain;
    const currentDomain = {
      x: dimension === "y" ? lastDomain.x : this.scaleNative(x, evt, targetProps, "x"),
      y: dimension === "x" ? lastDomain.y : this.scaleNative(y, evt, targetProps, "y")
    };
    const resumeAnimation = this.handleAnimation(ctx);
    const originalPinchDistance =
      targetProps.originalPinchDistance || this.getPinchDistance(touches);
    if (isFunction(onDomainChange)) {
      onDomainChange(currentDomain);
    }
    return [{
      target: "parent",
      callback: resumeAnimation,
      mutation: () => {
        return {
          domain: currentDomain, currentDomain, originalDomain, cachedZoomDomain: zoomDomain,
          parentControlledProps: ["domain"], panning: false, originalPinchDistance
        };
      }
    }];
  },
  getPinchDistance([a, b]) {
    return hypotenuse(b.locationX - a.locationX, b.locationY - a.locationY);
  },
  getScaleFactorNative(evt, props) {
    const { originalPinchDistance } = props;
    const { touches } = evt.nativeEvent;

    if (!originalPinchDistance) { return 1; } // if the first pinch event, don't do anything

    const currentPinchDistance = this.getPinchDistance(touches);
    const scaledPinchChange = (currentPinchDistance - originalPinchDistance) / screenSize;
    return 1 - scaledPinchChange;
  },
  getScalePercentNative(evt, props, axis) {
    const originalDomain = this.getDomain(props);
    const [from, to] = originalDomain[axis];
    const position = this.getPositionNative(evt, props, originalDomain);
    return (position[axis] - from) / Math.abs(to - from);
  },
  getPositionNative(evt, props, originalDomain) {
    const {x, y} = Selection.getSVGEventCoordinates(evt);
    const originalScale = {
      x: props.scale.x.domain(originalDomain.x),
      y: props.scale.y.domain(originalDomain.y)
    };
    return Selection.getDataCoordinates(originalScale, x, y);
  },
  scaleNative(currentDomain, evt, props, axis) { // eslint-disable-line max-params
    const [from, to] = currentDomain;
    const range = Math.abs(to - from);
    const minimumZoom = props.minimumZoom && props.minimumZoom[axis];
    const factor = this.getScaleFactorNative(evt, props);
    if (minimumZoom && range <= minimumZoom && factor < 1) {
      return currentDomain;
    }
    const [fromBound, toBound] = this.getDomain(props)[axis];
    const percent = this.getScalePercentNative(evt, props, axis);
    const point = (factor * from) + percent * (factor * range);
    const minDomain = this.getMinimumDomain(point, props, axis);
    const [newMin, newMax] = this.getScaledDomain(currentDomain, factor, percent);
    const newDomain = [
      newMin > fromBound && newMin < toBound ? newMin : fromBound,
      newMax < toBound && newMax > fromBound ? newMax : toBound
    ];
    const domain = Math.abs(minDomain[1] - minDomain[0]) > Math.abs(newDomain[1] - newDomain[0]) ?
      minDomain : newDomain;
    return Collection.containsDates([fromBound, toBound]) ?
      [ new Date(domain[0]), new Date(domain[1]) ] : domain;
  }
};

export default {
  onTouchStart: Helpers.onTouchStart.bind(Helpers),
  onTouchEnd: Helpers.onTouchEnd.bind(Helpers),
  onTouchMove: throttle(Helpers.onTouchMove.bind(Helpers), 16, {leading: true}),
  onTouchPinch: throttle(Helpers.onTouchPinch.bind(Helpers), 16, {leading: true})
};
