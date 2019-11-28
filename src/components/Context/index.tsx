import React from 'react';
import { UseHotspotsResult } from 'hooks/useHotspots/types';

const Context = React.createContext<UseHotspotsResult>({
  state: {
    isPointing: false,
    hotspots: [],
  },
  actions: {
    deleteHotspot: (): void => {},
    editHotspot: (): void => {},
    addHotspot: (): void => {},
    toggleIsPointing: (): void => {},
  },
});

export default Context;
