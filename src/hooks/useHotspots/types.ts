import { Hotspot, HotspotPosition } from 'shared/types/hotspot';

export enum Actions {
  deleteHotspot = 'deleteHotspot',
  editHotspot = 'editHotspot',
  saveHotspot = 'saveHotspot',
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
    [Actions.saveHotspot]: (hotspot: Hotspot) => void;
    [Actions.toggleIsPointing]: (isPointing: boolean) => void;
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
  | { type: Actions.toggleIsPointing; payload: { isPointing: boolean } };
