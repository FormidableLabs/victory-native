import React from "react";
import { ScrollView, Text } from "react-native";
// import { createContainer } from "victory-native";
import viewStyles from "../styles/view-styles";

export default class extends React.Component {
  static navigationOptions = {
    headerTitle: "createContainer()"
  };

  render() {
    return (
      <ScrollView style={viewStyles.container}>
        <Text />
      </ScrollView>
    );
  }
}
