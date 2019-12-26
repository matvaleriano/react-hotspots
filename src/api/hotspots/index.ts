import { Hotspot } from 'shared/types/hotspot';

export const getHotspots = (): string =>
  localStorage.getItem('hotspots') || '[]';

export const addHotspots = (hotspots: Hotspot[] = []): void => {
  localStorage.setItem('hotspots', JSON.stringify(hotspots));
};
