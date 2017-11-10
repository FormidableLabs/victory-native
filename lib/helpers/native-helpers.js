import { omit } from "lodash";

export default {

  getStyle(style) {
    if (!style) { return undefined; }
    // TODO: more style fixes for Native?
    const unsupportedProps = ["pointerEvents", "x", "y", "_x", "_y", "userSelect"];
    const strokeProperties = [
      "stroke", "strokeWidth", "strokeOpacity", "strokeDasharray",
      "strokeDashoffset", "strokeLinecap", "strokeLinejoin"
    ];
    return style.stroke === "none" || style.stroke === "transparent" ?
      omit(style, [...unsupportedProps, ...strokeProperties]) : omit(style, unsupportedProps);
  },

  parseTransformString(baseString) {
    if (typeof baseString !== "string") {
      return undefined;
    }
    const str = baseString.replace(",", "");
    const translate = str.match(/translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/);
    const scale = str.match(/scale\(\s*([^\s,)]+)[ ,]([^\s,)]+)/);
    const rotate = str.match(/rotate\(\s*([^\s,)]+)/); // eslint-disable-line no-unused-vars

    // TODO: Currently rotations are causing an unwanted translation.
    // See https://github.com/react-native-community/react-native-svg/issues/242
    const rotation = undefined;
    // const rotation = Array.isArray(rotate) ? rotate[1] : undefined;

    return {
      translateX: Array.isArray(translate) ? translate[1] : undefined,
      translateY: Array.isArray(translate) ? translate[2] : undefined,
      scaleX: Array.isArray(scale) ? scale[1] : undefined,
      scaleY: Array.isArray(scale) ? scale[2] : undefined,
      rotate: rotation
    };
  },

  getTransform(baseTransform) {
    return typeof baseTransform !== "string" ?
      baseTransform : this.parseTransformString(baseTransform);
  }
};
