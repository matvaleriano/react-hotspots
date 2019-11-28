export type HotspotPosition = {
  left: number;
  top: number;
};

export type HotspotSavedWindowSize = {
  offsetWidth: number;
  offsetHeight: number;
};

export type Hotspot = {
  description?: string;
  id: string;
  position: HotspotPosition;
  title?: string;
  windowSize?: HotspotSavedWindowSize;
};
