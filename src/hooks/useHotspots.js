import { useState, useEffect } from 'react';
import { getHotspots, saveHotspots } from '../api/hotspots';

const useHotspots = () => {
  const [isPointing, setIsPointing] = useState(false);
  const [hotspots, setHotspots] = useState([]);

  const removeHotspot = (index) => {
    const hotspotsToSave = [
      ...hotspots.slice(0, index),
      ...hotspots.slice(index + 1)
    ];

    setHotspots(hotspotsToSave);
    saveHotspots(hotspotsToSave);
  }

  const addHotspot = (e) => {
    console.log(e);
    const { x: left, y: top } = e;
    const hotspot = { left, top };
    const hotspotsToSave = [...hotspots, hotspot];

    setHotspots(hotspotsToSave);
    saveHotspots(hotspotsToSave);
  };

  const paintElement = ({ target }) => {
    target.classList.add('is-pointing');
  };

  const removePaintFromElement = ({ target }) => {
    target.classList.remove('is-pointing');
  };

  const handleAddHotspot = (e) => {
    addHotspot(e);
    setIsPointing(false);
    removePaintFromElement(e);
    removeListeners();
  };

  function addListeners() {
    document.addEventListener('click', handleAddHotspot);
    document.addEventListener('mouseover', paintElement);
    document.addEventListener('mouseout', removePaintFromElement);
  };

  function removeListeners() {
    document.removeEventListener('click', handleAddHotspot);
    document.removeEventListener('mouseover', paintElement);
    document.removeEventListener('mouseout', removePaintFromElement);
  };

  const startPointing = () => {
    addListeners();
    setIsPointing(true);
  };

  useEffect(() => {
    removeListeners();

    if (isPointing) {
      addListeners();
    }

    return () => { removeListeners() };
  }, [isPointing])

  useEffect(() => {
    setHotspots(JSON.parse(getHotspots()));
  }, []);

  return {
    isPointing,
    hotspots,
    startPointing,
    removeHotspot
  };
};

export default useHotspots;
