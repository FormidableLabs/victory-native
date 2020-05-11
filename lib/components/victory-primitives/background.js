import React from "react";
import Rect from "./rect";
import { Background, Circle, Rect } from "victory-core/es";

const NativeBackground = (props) => <Background circleComponent={<Circle/>} rectComponent={<Rect/>} {...props} />;

export default NativeBackground;
