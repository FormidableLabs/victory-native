import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Platform
} from "react-native";
import styles from "../styles/container-view-styles";
import ChevronIcon from "../components/chevron";

const sections = [
  { data: [], title: "Charts" },
  {
    data: [
      {
        key: "ContainersView",
        title: "Cursor, Brush, Selection, Zoom, Voronoi"
      },
      { key: "CreateContainerView", title: "createContainer()" }
    ],
    title: "Containers"
  },
  {
    data: [
      { key: "LegendsView", title: "Legends" },
      { key: "AxisView", title: "Axis" }
    ],
    title: "Other"
  }
];

export default class extends React.Component {
  static navigationOptions = {
    headerTitle: "Victory Native Demo"
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  render() {
    return (
      <SectionList
        style={styles.container}
        sections={sections}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(item.key)}
          >
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.title}</Text>
              {Platform.select({ ios: <ChevronIcon /> })}
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}
