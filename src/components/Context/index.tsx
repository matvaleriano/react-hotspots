import React from 'react';
import { Hotspot } from 'shared/types/hotspot';
import { UseHotspotsResult } from 'hooks/useHotspots/types';

const Context = React.createContext<UseHotspotsResult>({
  state: {
    isPointing: false,
    hotspots: [],
  },
  actions: {
    deleteHotspot: (id: string): void => {},
    editHotspot: (hotspot: Hotspot): void => {},
    saveHotspot: (hotspot: Hotspot): void => {},
    toggleIsPointing: (isPointing: boolean): void => {},
  },
});

export default Context;
