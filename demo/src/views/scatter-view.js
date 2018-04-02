/*global setInterval*/
import React from "react";
import { ScrollView } from "react-native";
import { VictoryScatter } from "victory-native";
import viewStyles from "../styles/view-styles";
import { generateRandomData } from "../data";

export default class extends React.Component {
  static navigationOptions = {
    headerTitle: "VictoryScatter"
  };

  constructor(props) {
    super(props);
    this.state = {
      randomData: generateRandomData()
    };
  }

  componentDidMount() {
    setInterval(this.updateDemoData.bind(this), 3000);
  }

  updateDemoData() {
    this.setState({
      randomData: generateRandomData()
    });
  }

  render() {
    return (
      <ScrollView style={viewStyles.container}>
        <VictoryScatter />

        <VictoryScatter y={data => Math.sin(2 * Math.PI * data.x)} />

        <VictoryScatter
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 5 },
            { x: 3, y: 4 },
            { x: 4, y: 2 },
            { x: 5, y: 5 }
          ]}
          size={8}
          symbol="star"
          style={{
            data: {
              fill: "gold",
              stroke: "orange",
              strokeWidth: 3
            }
          }}
        />

        <VictoryScatter
          style={{
            data: {
              fill: data => (data.y > 0 ? "red" : "blue")
            }
          }}
          symbol={data => (data.y > 0 ? "triangleUp" : "triangleDown")}
          y={d => Math.sin(2 * Math.PI * d.x)}
          samples={25}
        />
      </ScrollView>
    );
  }
}
