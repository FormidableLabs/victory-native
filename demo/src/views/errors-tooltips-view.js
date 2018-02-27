import React from "react";
import { Text, ScrollView } from "react-native";
import {
  VictoryBar,
  VictoryAxis,
  VictoryChart,
  Bar,
  VictoryPortal,
  VictoryScatter,
  VictoryTooltip,
  VictoryErrorBar
} from "victory-native";
import viewStyles from "../styles/view-styles";

export default class extends React.Component {
  static navigationOptions = {
    headerTitle: "Errors & Tooltips"
  };

  render() {
    return (
      <ScrollView style={viewStyles.container}>
        <Text style={[viewStyles.header, viewStyles.monospace]}>
          {"<VictoryErrorBar />"}
        </Text>

        <VictoryErrorBar
          style={{
            data: { stroke: "red", strokeWidth: 2 }
          }}
          data={[
            { x: 1, y: 1, errorX: [1, 0.5], errorY: 0.1 },
            { x: 2, y: 2, errorX: [1, 3], errorY: 0.1 },
            { x: 3, y: 3, errorX: [1, 3], errorY: [0.2, 0.3] },
            { x: 4, y: 2, errorX: [1, 0.5], errorY: 0.1 },
            { x: 5, y: 1, errorX: [1, 0.5], errorY: 0.2 }
          ]}
        />
        <Text style={viewStyles.header}>{"Tooltips"}</Text>
        <VictoryChart>
          <VictoryScatter
            labelComponent={<VictoryTooltip />}
            data={[
              {
                x: 1,
                y: 3,
                fill: "red",
                symbol: "plus",
                size: 6,
                label: "Red"
              },
              {
                x: 2,
                y: 5,
                fill: "magenta",
                size: 9,
                opacity: 0.4,
                label: "Magenta"
              },
              {
                x: 3,
                y: 4,
                fill: "orange",
                size: 5,
                label: "Orange"
              },
              {
                x: 4,
                y: 2,
                fill: "brown",
                symbol: "square",
                size: 6,
                label: "Brown"
              },
              {
                x: 5,
                y: 5,
                fill: "black",
                symbol: "triangleUp",
                size: 5,
                label: "Black"
              }
            ]}
          />
        </VictoryChart>
        <VictoryChart
          events={[
            {
              childName: "bar",
              target: "data",
              eventHandlers: {
                onPressIn: () => {
                  return [
                    {
                      mutation: () => {
                        return { style: { fill: "orange" } };
                      }
                    }
                  ];
                }
              }
            }
          ]}
        >
          <VictoryBar
            name="bar"
            dataComponent={
              <VictoryPortal>
                <Bar />
              </VictoryPortal>
            }
          />
          <VictoryAxis tickFormat={["one", "two", "three", "four"]} />
        </VictoryChart>
      </ScrollView>
    );
  }
}
