import {
  zoomContainerMixin as zoomContainerMixinOriginal,
  voronoiContainerMixin as voronoiContainerMixinOriginal,
  selectionContainerMixin as selectionContainerMixinOriginal,
  brushContainerMixin as brushContainerMixinOriginal,
  makeCreateContainerFunction
} from "victory-chart/src";

import { VictoryContainer } from "../index";

// load directly, as "../index" would cause a circular dep
import { zoomContainerMixin } from "../components/victory-zoom-container";
import { voronoiContainerMixin } from "../components/victory-voronoi-container";
import { selectionContainerMixin } from "../components/victory-selection-container";
import { brushContainerMixin } from "../components/victory-brush-container";

export const createContainer = makeCreateContainerFunction({
  zoom: [zoomContainerMixinOriginal, zoomContainerMixin],
  voronoi: [voronoiContainerMixinOriginal, voronoiContainerMixin],
  selection: [selectionContainerMixinOriginal, selectionContainerMixin],
  brush: [brushContainerMixinOriginal, brushContainerMixin]
}, VictoryContainer);

export default createContainer;
