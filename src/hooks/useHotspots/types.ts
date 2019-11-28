import { Hotspot } from 'shared/types/hotspot';

export enum Actions {
  deleteHotspot = 'deleteHotspot',
  editHotspot = 'editHotspot',
  addHotspot = 'addHotspot',
  toggleIsPointing = 'toggleIsPointing',
}

export type State = {
  isPointing: boolean;
  hotspots: Hotspot[];
};

export type UseHotspotsResult = {
  state: State;
  actions: {
    [Actions.deleteHotspot]: (id: string) => void;
    [Actions.editHotspot]: (hotspot: Hotspot) => void;
    [Actions.addHotspot]: (hotspot: Hotspot) => void;
    [Actions.toggleIsPointing]: (isPointing: boolean) => void;
  };
};

export type ReducerActions =
  | { type: Actions.deleteHotspot; payload: { id: string } }
  | {
      type: Actions.addHotspot | Actions.editHotspot;
      payload: {
        hotspot: Hotspot;
      };
    }
  | { type: Actions.toggleIsPointing; payload: { isPointing: boolean } };
