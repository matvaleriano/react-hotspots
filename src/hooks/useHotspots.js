import { useState, useEffect } from 'react';
import { getHotspots, saveHotspots } from '../api/hotspots';

function addListeners({ handleAddHotspot, paintElement, removePaintFromElement }) {
  document.addEventListener('click', handleAddHotspot);
  document.addEventListener('mouseover', paintElement);
  document.addEventListener('mouseout', removePaintFromElement);
}

function removeListeners({ handleAddHotspot, paintElement, removePaintFromElement }) {
  document.removeEventListener('click', handleAddHotspot);
  document.removeEventListener('mouseover', paintElement);
  document.removeEventListener('mouseout', removePaintFromElement);
}

const useHotspots = () => {
  const [isPointing, setIsPointing] = useState(false);
  const [hotspots, setHotspots] = useState([]);

  const removeHotspot = (index) => {
    const hotspotsToSave = [
      ...hotspots.slice(0, index),
      ...hotspots.slice(index + 1),
    ];

    setHotspots(hotspotsToSave);
    saveHotspots(hotspotsToSave);
  };

  const addHotspot = (e) => {
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
    removeListeners({
      handleAddHotspot,
      paintElement,
      removePaintFromElement,
    });
  };

  const startPointing = () => {
    addListeners({
      handleAddHotspot,
      paintElement,
      removePaintFromElement,
    });
    setIsPointing(true);
  };

  useEffect(() => {
    removeListeners({
      handleAddHotspot,
      paintElement,
      removePaintFromElement,
    });

    if (isPointing) {
      addListeners({
        handleAddHotspot,
        paintElement,
        removePaintFromElement
      });
    }

    return () => {
      removeListeners({
        handleAddHotspot,
        paintElement,
        removePaintFromElement,
      });
    };
  }, [isPointing]);

  useEffect(() => {
    setHotspots(JSON.parse(getHotspots()));
  }, []);

  return {
    isPointing,
    hotspots,
    startPointing,
    removeHotspot,
  };
};

export default useHotspots;
