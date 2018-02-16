import { StackNavigator as stackNavigator } from "react-navigation";
import ComponentsView from "./views/components-view";

import LegendsView from "./views/legends-view";
import AxisView from "./views/axis-view";
import ContainersView from "./views/containers-view";

export default stackNavigator(
  {
    ComponentsView: { screen: ComponentsView },
    ContainersView: { screen: ContainersView },
    LegendsView: { screen: LegendsView },
    AxisView: { screen: AxisView }
  },
  {
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
