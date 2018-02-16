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

export default class extends React.Component {
  static navigationOptions = {
    headerTitle: "Built–in Containers"
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
          {"VictoryCursorContainer"}
        </Text>
        <VictoryChart
          containerComponent={
            <VictoryCursorContainer
              onTouchStart={() => this.changeScroll(false)}
              onTouchEnd={() => this.changeScroll(true)}
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
              onTouchStart={() => this.changeScroll(false)}
              onTouchEnd={() => this.changeScroll(true)}
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
              onTouchStart={() => this.changeScroll(false)}
              onTouchEnd={() => this.changeScroll(true)}
            />
          }
        >
          <VictoryScatter
            data={this.state.staticRandomData}
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
              onTouchStart={() => this.changeScroll(false)}
              onTouchEnd={() => this.changeScroll(true)}
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
              onTouchStart={() => this.changeScroll(false)}
              onTouchEnd={() => this.changeScroll(true)}
              labels={d => `( ${round(d.x, 2)} , ${round(d.y, 2)} )`}
            />
          }
        >
          <VictoryLine data={this.state.staticRandomData} />
        </VictoryChart>
      </ScrollView>
    );
  }
}
