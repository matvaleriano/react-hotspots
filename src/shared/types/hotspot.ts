export type HotspotPosition = {
  left: number;
  top: number;
};

export type Hotspot = {
  description?: string;
  id: string;
  position: HotspotPosition;
  title: string;
};
