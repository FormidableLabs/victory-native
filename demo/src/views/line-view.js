import React from "react";
import { View, ScrollView } from "react-native";
// import { VictoryChart } from "victory-native";
import viewStyles from "../styles/view-styles";

export default class extends React.Component {
  static navigationOptions = {
    headerTitle: "VictoryLine"
  };

  render() {
    return (
      <ScrollView style={viewStyles.container}>
        <View />
      </ScrollView>
    );
  }
}
