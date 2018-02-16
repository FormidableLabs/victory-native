import { range, random } from "lodash";

export const generateRandomData = (points = 6) =>
  range(1, points + 1).map(i => ({ x: i, y: i + random(-1, 2) }));
