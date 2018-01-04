import {
  zoomContainerMixin as zoomContainerMixinOriginal,
  voronoiContainerMixin as voronoiContainerMixinOriginal,
  selectionContainerMixin as selectionContainerMixinOriginal,
  brushContainerMixin as brushContainerMixinOriginal,
  cursorContainerMixin as cursorContainerMixinOriginal,
  makeCreateContainerFunction
} from "victory-chart/es";

import { VictoryContainer } from "../index";

// load directly, as "../index" would cause a circular dep
import { zoomContainerMixin } from "../components/victory-zoom-container";
import { voronoiContainerMixin } from "../components/victory-voronoi-container";
import { selectionContainerMixin } from "../components/victory-selection-container";
import { brushContainerMixin } from "../components/victory-brush-container";
import { cursorContainerMixin } from "../components/victory-cursor-container";

export const createContainer = makeCreateContainerFunction({
  zoom: [zoomContainerMixinOriginal, zoomContainerMixin],
  voronoi: [voronoiContainerMixinOriginal, voronoiContainerMixin],
  selection: [selectionContainerMixinOriginal, selectionContainerMixin],
  brush: [brushContainerMixinOriginal, brushContainerMixin],
  cursor: [cursorContainerMixinOriginal, cursorContainerMixin]
}, VictoryContainer);

export default createContainer;
