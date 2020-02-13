import React from "react";
import { NavigationScreenProps } from "react-navigation";
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
  {
    data: [
      { key: "PieView", title: "VictoryPie" },
      { key: "ChartView", title: "VictoryChart" },
      { key: "LineView", title: "VictoryLine" },
      { key: "AreaView", title: "VictoryArea" },
      { key: "BarView", title: "VictoryBar" }
      // { key: "ScatterView", title: "VictoryScatter" },
      // { key: "BoxPlotView", title: "VictoryBoxPlot" }
    ],
    title: "Charts"
  },
  // {
  //   data: [
  //     { key: "ContainersView", title: "Built–in Containers" },
  //     { key: "CreateContainerView", title: "Custom Containers" }
  //   ],
  //   title: "Containers"
  // },
  {
    data: [
      { key: "LegendsView", title: "Legends" },
      { key: "AxisView", title: "Axis" }
      // { key: "ErrorsTooltipsView", title: "Errors & Tooltips" }
    ],
    title: "Other"
  }
];

export default function ComponentsView(props: NavigationScreenProps) {
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
        <TouchableOpacity onPress={() => props.navigation.navigate(item.key)}>
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
            {Platform.select({ ios: <ChevronIcon /> })}
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

ComponentsView.navigationOptions = {
  headerTitle: "Victory Native TS Demo"
};
