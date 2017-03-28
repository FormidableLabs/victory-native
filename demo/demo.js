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
  VictoryGroup,
  VictoryStack,
  VictoryCandlestick,
  VictoryErrorBar,
  VictoryBar,
  VictoryLine,
  VictoryArea,
  VictoryScatter,
  VictoryTooltip,
  Flyout,
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
        <Svg width={100} height={100}>
          <Flyout x={20} y={10} width={20} height={20} cornerRadius={1}
            style={{stroke: "black", fill: "none", strokeWidth: 2}} pointerLength={1} pointerWidth={1}
          />
        </Svg>
        <Text>{"VICTORY BAR"}</Text>
        <VictoryChart domain={{x: [0, 4]}}>
          <VictoryGroup
            labels={["a", "b", "c"]}
            offset={10}
            colorScale={"qualitative"}
          >
            <VictoryBar
              data={[
                {x: 1, y: 1},
                {x: 2, y: 2},
                {x: 3, y: 5}
              ]}
            />
            <VictoryBar
              data={[
                {x: 1, y: 2},
                {x: 2, y: 1},
                {x: 3, y: 7}
              ]}
            />
            <VictoryBar
              data={[
                {x: 1, y: 3},
                {x: 2, y: 4},
                {x: 3, y: 9}
              ]}
            />
          </VictoryGroup>
        </VictoryChart>
        <VictoryChart>
          <VictoryScatter
            labelComponent={<VictoryTooltip/>}
            data={[
              {
                x: 1, y: 3, fill: "red",
                symbol: "plus", size: 6, label: "Red"
              },
              {
                x: 2, y: 5, fill: "magenta",
                size: 9, opacity: 0.4, label: "Magenta"
              },
              {
                x: 3, y: 4, fill: "orange",
                size: 5, label: "Orange"
              },
              {
                x: 4, y: 2, fill: "brown",
                symbol: "square", size: 6, label: "Brown"
              },
              {
                x: 5, y: 5, fill: "black",
                symbol: "triangleUp", size: 5, label: "Black"
              }
            ]}
          />
        </VictoryChart>
        <VictoryChart animate={{duration: 1500}}>
          <VictoryBar
            data={this.state.transitionData}
            style={{
              data: {
                fill: "tomato", width: 12
              }
            }}
            animate={{
              onExit: {
                duration: 500,
                before: () => ({
                  y: 0,
                  fill: "orange",
                  label: "BYE"
                })
              }
            }}
          />
        </VictoryChart>
        <VictoryChart>
          <VictoryStack>
            <VictoryArea
              data={[
                {x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}, {x: "d", y: 4}, {x: "e", y: 7}
              ]}
            />
            <VictoryArea
              data={[
                {x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}, {x: "d", y: 7}, {x: "e", y: 5}
              ]}
            />
            <VictoryArea
              data={[
                {x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}, {x: "d", y: 2}, {x: "e", y: 6}
              ]}
            />
            <VictoryArea
              data={[
                {x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 3}, {x: "d", y: 4}, {x: "e", y: 7}
              ]}
            />
          </VictoryStack>
        </VictoryChart>
        <VictoryErrorBar
          style={{
            data: {stroke: "red", strokeWidth: 2}
          }}
          data={[
            {x: 1, y: 1, errorX: [1, 0.5], errorY: .1},
            {x: 2, y: 2, errorX: [1, 3], errorY: .1},
            {x: 3, y: 3, errorX: [1, 3], errorY: [.2, .3]},
            {x: 4, y: 2, errorX: [1, 0.5], errorY: .1},
            {x: 5, y: 1, errorX: [1, 0.5], errorY: .2}
          ]}
        />
        <VictoryChart><VictoryLine/></VictoryChart>
        <VictoryChart><VictoryCandlestick data={candleData}/></VictoryChart>
        <VictoryPie/>
        <Text>{"END"}</Text>
      </ScrollView>
    );
  }
}
