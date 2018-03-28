import React from "react";
import { ScrollView } from "react-native";
import { VictoryChart, VictoryBoxPlot } from "victory-native";
import viewStyles from "../styles/view-styles";

export default class extends React.Component {
  static navigationOptions = {
    headerTitle: "VictoryBoxPlot"
  };

  render() {
    return (
      <ScrollView style={viewStyles.container}>
        <VictoryChart domainPadding={50}>
          <VictoryBoxPlot
            minLabels maxLabels
            boxWidth={10}
            data={[
              { x: "red", y: [5, 10, 9, 2] },
              { x: "blue", y: [1, 15, 6, 8] },
              { x: "green", y: [3, 5, 6, 9] },
              { x: "yellow", y: [5, 20, 8, 12] },
              { x: "white", y: [2, 11, 12, 13] }
            ]}
          />
        </VictoryChart>
      </ScrollView>
    );
  }
}
