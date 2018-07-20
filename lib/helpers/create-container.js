import {
  zoomContainerMixin as zoomContainerMixinOriginal
} from "victory-zoom-container/es";
import {
  voronoiContainerMixin as voronoiContainerMixinOriginal
} from "victory-voronoi-container/es";
import {
  selectionContainerMixin as selectionContainerMixinOriginal
} from "victory-selection-container/es";
import {
  brushContainerMixin as brushContainerMixinOriginal
} from "victory-brush-container/es";
import {
  cursorContainerMixin as cursorContainerMixinOriginal
} from "victory-cursor-container/es";
import { makeCreateContainerFunction } from "victory-create-container/es";

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
