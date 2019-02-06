export const getHotspots = () => localStorage.getItem('hotspots') || '[]';

export const saveHotspots = (hotspots = []) => {
  localStorage.setItem(
    'hotspots',
    JSON.stringify(hotspots),
  );
};
