import React from 'react';
import Context from '../Context';
import Header from '../Header';
import Hotspot from '../Hotspot';
import HotspotAdd from '../HotspotAdd';
import HotspotsList from '../HotspotsList';
import useHotspots from '../../hooks/useHotspots';

const App = () => {
  const hotspots = useHotspots();
  const { hotspots: markers = [] } = hotspots;
  const { Provider } = Context;

  return (
    <Provider value={hotspots}>
      <Header />

      <HotspotAdd />
      <HotspotsList />

      { markers.map((hotspot, index) => (
        <Hotspot
          key={index.toString()}
          {...hotspot}
        />
      ))
      }
    </Provider>
  );
};

export default App;
