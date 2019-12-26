import React from 'react';
import { Provider } from '../Context';
import Header from '../Header';
import HotspotsList from '../HotspotList';

const App: React.FC = () => (
  <Provider>
    <Header />

    <HotspotsList />
  </Provider>
);

export default App;
