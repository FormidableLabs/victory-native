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
  }
};
