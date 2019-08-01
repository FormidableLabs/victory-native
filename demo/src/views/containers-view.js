import React from "react";
import { ScrollView, Text } from "react-native";
import {
  VictoryChart,
  VictoryBar,
  VictoryScatter,
  VictoryZoomContainer,
  VictoryVoronoiContainer,
  VictorySelectionContainer,
  VictoryBrushContainer,
  VictoryLine,
  VictoryCursorContainer,
  VictoryAxis,
  VictoryLabel
} from "victory-native";
import viewStyles from "../styles/view-styles";
import { round } from "lodash";
import { generateRandomData } from "../data";

export default function ContainersView() {
  const [scrollEnabled, setScrollEnabled] = React.useState(true);
  const randomData = React.useRef(generateRandomData());

  return (
    <ScrollView
      style={viewStyles.container}
      contentContainerStyle={viewStyles.contentContainer}
      scrollEnabled={scrollEnabled}
    >
      <Text style={[viewStyles.header, viewStyles.monospace]}>
        {"VictoryCursorContainer"}
      </Text>
      <VictoryChart
        containerComponent={
          <VictoryCursorContainer
            onTouchStart={() => setScrollEnabled(false)}
            onTouchEnd={() => setScrollEnabled(true)}
            cursorLabel={d => `${round(d.x, 2)} , ${round(d.y, 2)}`}
          />
        }
      >
        <VictoryAxis tickLabelComponent={<VictoryLabel angle={45} />} />
        <VictoryBar />
      </VictoryChart>

      <Text style={[viewStyles.header, viewStyles.monospace]}>
        {"VictoryBrushContainer"}
      </Text>
      <VictoryChart
        containerComponent={
          <VictoryBrushContainer
            onTouchStart={() => setScrollEnabled(false)}
            onTouchEnd={() => setScrollEnabled(true)}
            selectionStyle={{ fill: "blue", fillOpacity: 0.1 }}
          />
        }
      >
        <VictoryBar />
      </VictoryChart>

      <Text style={[viewStyles.header, viewStyles.monospace]}>
        {"VictorySelectionContainer"}
      </Text>
      <VictoryChart
        containerComponent={
          <VictorySelectionContainer
            onTouchStart={() => setScrollEnabled(false)}
            onTouchEnd={() => setScrollEnabled(true)}
          />
        }
      >
        <VictoryScatter
          data={randomData.current}
          style={{
            data: { fill: (d, active) => (active ? "tomato" : "gray") }
          }}
        />
      </VictoryChart>

      <Text style={[viewStyles.header, viewStyles.monospace]}>
        {"VictoryZoomContainer"}
      </Text>
      <VictoryChart
        containerComponent={
          <VictoryZoomContainer
            onTouchStart={() => setScrollEnabled(false)}
            onTouchEnd={() => setScrollEnabled(true)}
          />
        }
      >
        <VictoryBar />
      </VictoryChart>

      <Text style={[viewStyles.header, viewStyles.monospace]}>
        {"VictoryVoronoiContainer"}
      </Text>
      <VictoryChart
        containerComponent={
          <VictoryVoronoiContainer
            onTouchStart={() => setScrollEnabled(false)}
            onTouchEnd={() => setScrollEnabled(true)}
            labels={d => `( ${round(d.x, 2)} , ${round(d.y, 2)} )`}
          />
        }
      >
        <VictoryLine data={randomData.current} />
      </VictoryChart>
    </ScrollView>
  );
}

ContainersView.navigationOptions = {
  headerTitle: "Built–in Containers"
};
