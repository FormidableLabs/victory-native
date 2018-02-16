import React from "react";
import { ScrollView, Text } from "react-native";
import { VictoryChart, VictoryScatter, createContainer } from "victory-native";
import viewStyles from "../styles/view-styles";
import { generateRandomData } from "../data";

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

export default class extends React.Component {
  static navigationOptions = {
    headerTitle: "Custom Containers"
  };

  state = {
    scrollEnabled: true
  };

  changeScroll = scrollEnabled => this.setState({ scrollEnabled });

  render() {
    return (
      <ScrollView
        style={viewStyles.container}
        contentContainerStyle={viewStyles.contentContainer}
        scrollEnabled={this.state.scrollEnabled}
      >
        <Text style={[viewStyles.header, viewStyles.monospace]}>
          {'createContainer("zoom", "voronoi")'}
        </Text>
        <VictoryChart
          containerComponent={
            <VictoryZoomVoronoiContainer
              onTouchStart={() => this.changeScroll(false)}
              onTouchEnd={() => this.changeScroll(true)}
              labels={d => `( ${d.x} , ${d.y} )`}
              dimension={"x"}
            />
          }
        >
          <VictoryScatter data={generateRandomData()} />
        </VictoryChart>
      </ScrollView>
    );
  }
}
