import React from "react";
import { ScrollView, Text } from "react-native";
import { VictoryChart, VictoryScatter, createContainer } from "victory-native";
import viewStyles from "../styles/view-styles";
import { generateRandomData } from "../data";

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

export default function CreateContainersView() {
  const [scrollEnabled, setScrollEnabled] = React.useState(true);
  const randomData = React.useRef(generateRandomData());

  return (
    <ScrollView
      style={viewStyles.container}
      contentContainerStyle={viewStyles.contentContainer}
      scrollEnabled={scrollEnabled}
    >
      <Text style={[viewStyles.header, viewStyles.monospace]}>
        {'createContainer("zoom", "voronoi")'}
      </Text>
      <VictoryChart
        containerComponent={
          <VictoryZoomVoronoiContainer
            onTouchStart={() => setScrollEnabled(false)}
            onTouchEnd={() => setScrollEnabled(true)}
            labels={d => `( ${d.x} , ${d.y} )`}
            dimension={"x"}
          />
        }
      >
        <VictoryScatter data={randomData.current} />
      </VictoryChart>
    </ScrollView>
  );
}

CreateContainersView.navigationOptions = {
  headerTitle: "Custom Containers"
};
