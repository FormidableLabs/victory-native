import {
  zoomContainerMixin as zoomContainerMixinOriginal
} from "victory-zoom-container";
import {
  voronoiContainerMixin as voronoiContainerMixinOriginal
} from "victory-voronoi-container";
import {
  selectionContainerMixin as selectionContainerMixinOriginal
} from "victory-selection-container";
import {
  brushContainerMixin as brushContainerMixinOriginal
} from "victory-brush-container";
import {
  cursorContainerMixin as cursorContainerMixinOriginal
} from "victory-cursor-container";
import { makeCreateContainerFunction } from "victory-create-container";

import VictoryContainer from "../components/victory-container";

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
