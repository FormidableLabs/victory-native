import { StackNavigator as stackNavigator } from "react-navigation";
import ComponentsView from "./views/components-view";

import LegendsView from "./views/legends-view";
import AxisView from "./views/axis-view";
import ContainersView from "./views/containers-view";
import CreateContainerView from "./views/create-container-view";
import ErrorsTooltipsView from "./views/errors-tooltips-view";
import AreaView from "./views/area-view";
import PieView from "./views/pie-view";
import BarView from "./views/bar-view";
import ChartView from "./views/chart-view";
import LineView from "./views/line-view";
import ScatterView from "./views/scatter-view";
import BoxPlotView from "./views/boxplot-view";

export default stackNavigator(
  {
    ComponentsView: { screen: ComponentsView },
    AreaView: { screen: AreaView },
    PieView: { screen: PieView },
    BarView: { screen: BarView },
    BoxPlotView: { screen: BoxPlotView },
    ChartView: { screen: ChartView },
    LineView: { screen: LineView },
    ScatterView: { screen: ScatterView },
    ContainersView: { screen: ContainersView },
    CreateContainerView: { screen: CreateContainerView },
    LegendsView: { screen: LegendsView },
    AxisView: { screen: AxisView },
    ErrorsTooltipsView: { screen: ErrorsTooltipsView }
  },
  {
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
