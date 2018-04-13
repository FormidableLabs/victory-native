import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";

import {
  VictoryArea,
  VictoryAxis,
  VictoryPolarAxis,
  VictoryBar,
  VictoryBoxPlot,
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

enzyme.configure({ adapter: new Adapter() });

const components = [
  { component: VictoryArea, name: "VictoryArea" },
  { component: VictoryAxis, name: "VictoryAxis" },
  { component: VictoryPolarAxis, name: "VictoryPolarAxis" },
  { component: VictoryBar, name: "VictoryBar" },
  { component: VictoryBoxPlot, name: "VictoryBoxPlot" },
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
      const wrapper = enzyme.shallow(React.createElement(c.component));
      expect(wrapper).to.have.length(1);
    });
  });
});
