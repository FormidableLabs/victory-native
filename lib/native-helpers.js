import omit from "lodash.omit";

export default {

  getStyle(style) {
    if (!style) { return undefined; }
    // TODO: more style fixes for Native?
    const unsupportedProps = ["pointerEvents", "x", "y", "_x", "_y"]
    const strokeProperties = [
      "stroke", "strokeWidth", "strokeOpacity", "strokeDasharray",
      "strokeDashoffset", "strokeLinecap", "strokeLinejoin"
    ];
    return style.stroke === "none" || style.stroke === "transparent" ?
      omit(style, [...unsupportedProps, ...strokeProperties]) : omit(style, unsupportedProps);
  },

  parseTransformString(str) {
    if (typeof str !== "string") {
      return undefined;
    }
    const translate = str.match(/translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/);
    const scale = str.match(/scale\(\s*([^\s,)]+)[ ,]([^\s,)]+)/);
    const rotate = str.match(/rotate\(\s*([^\s,)]+)/);
    return {
      translateX: Array.isArray(translate) ? translate[1] : undefined,
      translateY: Array.isArray(translate) ? translate[2] : undefined,
      scaleX: Array.isArray(scale) ? scale[1] : undefined,
      scaleY: Array.isArray(scale) ? scale[2] : undefined,
      rotate: Array.isArray(rotate) ? rotate[1] : undefined
    };
  },

  getTransform(baseTransform) {
    return typeof baseTransform !== "string" ?
      baseTransform : this.parseTransformString(baseTransform);
  },

  /**
   * Generates a new domain scaled by factor and constrained by the original domain.
   * @param  {[Number, Number]} currentDomain  The domain to be scaled.
   * @param  {[Number, Number]} originalDomain The original domain for the data set.
   * @param  {Number}           factor         The delta to translate by
   * @return {[Number, Number]}                The scale domain
   */
  scale (currentDomain, originalDomain, factor) {
    const [fromBound, toBound] = originalDomain;
    const [from, to] = currentDomain;
    const range = Math.abs(from - to);
    const midpoint = +from + (range / 2);
    const newRange = (range * factor) / 2;
    return [
      Collection.getMaxValue([midpoint - newRange, fromBound]),
      Collection.getMinValue([midpoint + newRange, toBound])
    ];
  },

/**
 * Generate a new domain translated by the delta and constrained by the original domain.
 * @param  {[Number, Number]} currentDomain  The domain to be translated.
 * @param  {[Number, Number]} originalDomain The original domain for the data set.
 * @param  {Number}           delta          The delta to translate by
 * @return {[Number, Number]}                The translated domain
 */
  pan (currentDomain, originalDomain, delta) {
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
  }
};
