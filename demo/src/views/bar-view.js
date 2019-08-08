import React from "react";
import { ScrollView, View } from "react-native";
import { VictoryBar, VictoryGroup, VictoryStack } from "victory-native";
import viewStyles from "../styles/view-styles";

export default function BarView() {
  return (
    <ScrollView style={viewStyles.container}>
      <VictoryBar />

      <VictoryBar
        polar
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 }
        ]}
      />

      <VictoryGroup
        width={300}
        height={375}
        offset={20}
        colorScale={"qualitative"}
      >
        <VictoryBar data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }]} />
        <VictoryBar data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 1 }]} />
        <VictoryBar data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 2 }]} />
      </VictoryGroup>

      <VictoryStack width={300} height={375} colorScale={"qualitative"}>
        <VictoryBar data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }]} />
        <VictoryBar data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 1 }]} />
        <VictoryBar data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 2 }]} />
      </VictoryStack>

      <VictoryBar
        height={375}
        padding={75}
        style={{
          data: {
            fill: data => (data.y > 2 ? "red" : "blue")
          }
        }}
        data={[
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 },
          { x: 4, y: 2 },
          { x: 5, y: 1 }
        ]}
      />
    </ScrollView>
  );
}

BarView.navigationOptions = {
  headerTitle: "VictoryBar"
};
