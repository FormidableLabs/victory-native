import React from "react-native";
import { render } from "enzyme";
import { expect } from "chai";

import {
  VictoryArea,
  VictoryAxis,
  VictoryBar,
  VictoryCandlestick,
  VictoryChart,
  VictoryContainer,
  VictoryErrorBar,
  VictoryGroup,
  VictoryLabel,
  VictoryLine,
  VictoryPie,
  VictoryScatter,
  VictoryStack,
  VictoryTooltip,
  VictoryVoronoi
} from "../../lib";

const components = [
  { component: VictoryArea, name: "VictoryArea" },
  { component: VictoryAxis, name: "VictoryAxis" },
  { component: VictoryBar, name: "VictoryBar" },
  { component: VictoryCandlestick, name: "VictoryCandlestick" },
  { component: VictoryChart, name: "VictoryChart" },
  { component: VictoryContainer, name: "VictoryContainer" },
  { component: VictoryErrorBar, name: "VictoryErrorBar" },
  { component: VictoryGroup, name: "VictoryGroup" },
  { component: VictoryLabel, name: "VictoryLabel" },
  { component: VictoryLine, name: "VictoryLine" },
  { component: VictoryPie, name: "VictoryPie" },
  { component: VictoryScatter, name: "VictoryScatter" },
  { component: VictoryStack, name: "VictoryStack" },
  { component: VictoryTooltip, name: "VictoryTooltip" },
  { component: VictoryVoronoi, name: "VictoryVoronoi" }
];

describe("Default render", () => {
  components.forEach((c) => {
    it(`should work for ${c.name}`, () => {
      const wrapper = render(React.createElement(c.component));
      expect(wrapper).to.have.length(1);
    });
  });
});
