import { Hotspot } from 'shared/types/hotspot';

export enum Actions {
  deleteHotspot = 'deleteHotspot',
  editHotspot = 'editHotspot',
  saveHotspot = 'saveHotspot',
  toggleIsClicking = 'toggleIsClicking',
}

export type State = {
  isClicking: boolean;
  hotspots: Hotspot[];
};

export type UseHotspotsResult = {
  state: State;
  actions: {
    [Actions.deleteHotspot]: (id: string) => void;
    [Actions.saveHotspot]: (hotspot: Hotspot) => void;
  };
};

export type ReducerActions =
  | { type: Actions.deleteHotspot; payload: { id: string } }
  | {
      type: Actions.saveHotspot | Actions.editHotspot;
      payload: {
        hotspot: Hotspot;
      };
    }
  | { type: Actions.toggleIsClicking; payload: { isClicking: boolean } };
