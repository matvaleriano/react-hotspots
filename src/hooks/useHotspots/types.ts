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
    [Actions.editHotspot]: ({
      id,
      title,
      description,
    }: {
      id: string;
      title: string;
      description?: string;
    }) => void;
    [Actions.addHotspot]: (hotspot: Hotspot) => void;
    [Actions.toggleIsPointing]: (isPointing: boolean) => void;
  };
};

export type ReducerActions =
  | { type: Actions.deleteHotspot; payload: { id: string } }
  | {
      type: Actions.addHotspot;
      payload: {
        hotspot: Hotspot;
      };
    }
  | {
      type: Actions.editHotspot;
      payload: {
        id: string;
        title: string;
        description?: string;
      };
    }
  | { type: Actions.toggleIsPointing; payload: { isPointing: boolean } };
