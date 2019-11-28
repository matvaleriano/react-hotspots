export const getHotspots = (): string =>
  localStorage.getItem('hotspots') || '[]';

export const addHotspots = (hotspots = []): void => {
  localStorage.setItem('hotspots', JSON.stringify(hotspots));
};
