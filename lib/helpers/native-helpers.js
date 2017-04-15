import { omit } from "lodash";

export default {

  getStyle(style) {
    if (!style) { return undefined; }
    // TODO: more style fixes for Native?
    const unsupportedProps = ["pointerEvents", "x", "y", "_x", "_y"];
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
  getSVGEventCoordinates(evt) {
    // get the SVG coords of current event. replaces Victory's Selection.getSVGEventCoordinates
    // relies on the RN.View being the _exact_ same size as its child SVG.
    // this should be fine, as the svg is the only child of View and the View shirks to its children
    return {
      x: evt.nativeEvent.locationX,
      y: evt.nativeEvent.locationY
    };
  }
};
