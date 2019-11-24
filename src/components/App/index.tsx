import React from 'react';
import Context from '../Context';
import Header from '../Header';
import Hotspot from '../Hotspot';
import HotspotsList from '../HotspotsList';
import useHotspots from '../../hooks/useHotspots';

const App: React.SFC = () => {
  const { state, actions } = useHotspots();
  const { hotspots: markers = [] } = state;
  const { Provider } = Context;

  return (
    <Provider value={{ state, actions }}>
      <Header />

      <HotspotsList />
      {markers.map(hotspot => (
        <Hotspot key={hotspot.id} {...hotspot} />
      ))}
    </Provider>
  );
};

export default App;
