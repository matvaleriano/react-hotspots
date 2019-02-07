import { useState, useEffect } from 'react';
import { getHotspots, saveHotspots } from '../api/hotspots';

const useHotspots = () => {
  const [isPointing, setIsPointing] = useState(false);
  const [hotspots, setHotspots] = useState([]);

  const addListeners = ({ handleAddHotspot, paintElement, removePaintFromElement }) => {
    document.addEventListener('click', handleAddHotspot);
    document.addEventListener('mouseover', paintElement);
    document.addEventListener('mouseout', removePaintFromElement);
  };

  const removeListeners = ({ handleAddHotspot, paintElement, removePaintFromElement }) => {
    document.removeEventListener('click', handleAddHotspot);
    document.removeEventListener('mouseover', paintElement);
    document.removeEventListener('mouseout', removePaintFromElement);
  };

  const updateHotspot = ({ id, text, title }) => {
    if (!title || !text) {
      alert('Please insert all informations');
    }

    const hotspotsUpdated = hotspots.map(
      hotspot => (
        hotspot.id === id
          ? { ...hotspot, title, text }
          : hotspot
      ),
    );

    setHotspots(hotspotsUpdated);
    saveHotspots(hotspotsUpdated);
  };

  const removeHotspot = (index) => {
    const hotspotsToSave = [
      ...hotspots.slice(0, index),
      ...hotspots.slice(index + 1),
    ];

    setHotspots(hotspotsToSave);
    saveHotspots(hotspotsToSave);
  };

  const addHotspot = ({ x: left, y: top }) => {
    const generatedId = new Date().toISOString();
    const { offsetWidth, offsetHeight } = document.body;
    const hotspot = {
      left,
      top,
      id: generatedId,
      windowSize: {
        width: offsetWidth,
        height: offsetHeight,
      },
    };
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
        removePaintFromElement,
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
    updateHotspot,
  };
};

export default useHotspots;
