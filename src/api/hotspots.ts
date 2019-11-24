export const getHotspots = (): string =>
  localStorage.getItem('hotspots') || '[]';

export const saveHotspots = (hotspots = []): void => {
  localStorage.setItem('hotspots', JSON.stringify(hotspots));
};
