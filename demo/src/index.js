import { StackNavigator as stackNavigator } from "react-navigation";
import ComponentsView from "./views/components-view";

import LegendsView from "./views/legends-view";

export default stackNavigator(
  {
    ComponentsView: { screen: ComponentsView },
    LegendsView: { screen: LegendsView }
  },
  {
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
