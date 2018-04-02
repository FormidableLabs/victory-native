/*global setInterval*/
import React from "react";
import { ScrollView } from "react-native";
import { VictoryLine } from "victory-native";
import { getStyles, getYFunction } from "../data";
import viewStyles from "../styles/view-styles";

export default class extends React.Component {
  static navigationOptions = {
    headerTitle: "VictoryLine"
  };

  constructor(props) {
    super(props);
    this.state = {
      y: getYFunction(),
      styles: getStyles()
    };
  }

  componentDidMount() {
    setInterval(this.updateDemoData.bind(this), 3000);
  }

  updateDemoData() {
    this.setState({
      y: getYFunction(),
      styles: getStyles()
    });
  }

  render() {
    return (
      <ScrollView style={viewStyles.container}>
        <VictoryLine />

        <VictoryLine polar
          data={[
            { x: 0, y: 1 },
            { x: 1, y: 3 },
            { x: 2, y: 2 },
            { x: 3, y: 4 },
            { x: 4, y: 3 },
            { x: 5, y: 5 }
          ]}
        />

        <VictoryLine
          data={[
            { amount: 1, yield: 1, error: 0.5 },
            { amount: 2, yield: 2, error: 1.1 },
            { amount: 3, yield: 3, error: 0 },
            { amount: 4, yield: 2, error: 0.1 },
            { amount: 5, yield: 1, error: 1.5 }
          ]}
          x={"amount"}
          y={data => data.yield + data.error}
        />

        <VictoryLine y={data => Math.sin(2 * Math.PI * data.x)} />

        <VictoryLine
          height={300}
          domain={[0, 5]}
          padding={75}
          data={[
            { x: 0, y: 1 },
            { x: 1, y: 3 },
            { x: 2, y: 2 },
            { x: 3, y: 4 },
            { x: 4, y: 3 },
            { x: 5, y: 5 }
          ]}
          interpolation="cardinal"
          labels={() => "LINE"}
          style={{
            data: {
              stroke: "#822722",
              strokeWidth: 3
            },
            labels: { fontSize: 12 }
          }}
        />

        <VictoryLine
          width={300}
          style={{
            data: {
              stroke: data => {
                const y = data.map(d => d.y);
                return Math.max(...y) > 2 ? "red" : "blue";
              }
            }
          }}
          data={[
            { x: 0, y: 1 },
            { x: 1, y: 3 },
            { x: 2, y: 2 },
            { x: 3, y: 4 },
            { x: 4, y: 3 },
            { x: 5, y: 5 }
          ]}
        />

        <VictoryLine
          style={{
            data: { stroke: "red", strokeWidth: 9 }
          }}
          interpolation={"linear"}
          data={[
            { x: 0, y: 1 },
            { x: 1, y: 3 },
            { x: 2, y: 2 },
            { x: 3, y: 4 },
            { x: 4, y: 3 },
            { x: 5, y: 5 }
          ]}
        />

        <VictoryLine
          style={{ data: this.state.style }}
          interpolation="basis"
          animate={{ duration: 1500 }}
          y={this.state.y}
        />
      </ScrollView>
    );
  }
}
