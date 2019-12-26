import React from 'react';
import { UseHotspotsResult } from 'hooks/useHotspots/types';
import useHotspots from 'hooks/useHotspots';

const state = {
  isPointing: false,
  hotspots: [],
};

const actions = {
  deleteHotspot: function(): void {
    // initial attribute
  },
  editHotspot: function(): void {
    // initial attribute
  },
  addHotspot: function(): void {
    // initial attribute
  },
  toggleIsPointing: function(): void {
    // initial attribute
  },
};

const Context = React.createContext<UseHotspotsResult>({ state, actions });

type Props = {
  children: React.ReactNode;
};

export const Provider: React.FC<Props> = ({ children }: Props) => {
  const value = useHotspots();
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
