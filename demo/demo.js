/* demo.js is loaded by both index.ios.js and index.android.js */

import random from "lodash.random";
import range from "lodash.range";
import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text
} from "react-native";
import Svg from "react-native-svg";
import {
  VictoryLabel,
  VictoryChart,
  VictoryCandlestick,
  VictoryBar,
  VictoryLine,
  VictoryArea,
  VictoryPie
} from "victory-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#e1d7cd",
    justifyContent: "center",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 50
  },
  text: {
    fontSize: 18,
    fontFamily: "Menlo",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30
  }
});

const candleData = [
  {x: 1, open: 9, close: 30, high: 56, low: 7},
  {x: 2, open: 80, close: 40, high: 120, low: 10},
  {x: 3, open: 50, close: 80, high: 90, low: 20},
  {x: 4, open: 70, close: 22, high: 70, low: 5},
  {x: 5, open: 20, close: 35, high: 50, low: 10},
  {x: 6, open: 35, close: 30, high: 40, low: 3},
  {x: 7, open: 30, close: 90, high: 95, low: 30},
  {x: 8, open: 80, close: 81, high: 83, low: 75}
];

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: this.getYFunction(),
      style: this.getStyles(),
      transitionData: this.getTransitionData(),
      randomData: this.generateRandomData()
    };
  }
  getYFunction() {
    const n = random(2, 7);
    return (data) => Math.exp(-n * data.x) * Math.sin(2 * n * Math.PI * data.x);
  }

  generateRandomData() {
    return range(1, 7).map(() => ({x: " ", y: random(1, 10)}));
  }

  getStyles() {
    const colors = [
      "red", "orange", "magenta",
      "gold", "blue", "purple"
    ];
    return {
      stroke: colors[random(0, 5)],
      strokeWidth: random(1, 5)
    };
  }

  getTransitionData() {
    const n = random(4, 10)
    return range(n).map((i) => {
      return {
        x: i,
        y: random(2, 10)
      };
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        y: this.getYFunction(),
        style: this.getStyles(),
        transitionData: this.getTransitionData(),
        randomData: this.generateRandomData()
      });
    }, 3000);
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>{"VICTORY LABEL"}</Text>
        <Svg width={100} height={100}>
          <VictoryLabel x={20} y={20} text={["one", "two", "three"]} style={{fontSize: 20}}/>
        </Svg>
        <Text>{"VICTORY BAR"}</Text>
        <VictoryBar/>
        <VictoryCandlestick/>
        <VictoryChart><VictoryArea/></VictoryChart>
        <Text>{"END"}</Text>
      </ScrollView>
    );
  }
}
