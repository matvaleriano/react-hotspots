import { useReducer } from 'react';
import { Hotspot } from 'shared/types/hotspot';
import { Actions, ReducerActions, State, UseHotspotsResult } from './types';

const reducer = (state: State, action: ReducerActions): State => {
  switch (action.type) {
    case Actions.saveHotspot:
      return {
        ...state,
        hotspots: [...state.hotspots, action.payload.hotspot],
      };
    default:
      return state;
  }
};

const initialState = {
  isClicking: false,
  hotspots: [],
};

const useHotspots = (): UseHotspotsResult => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    actions: {
      saveHotspot: (hotspot: Hotspot): void => {
        dispatch({ type: Actions.saveHotspot, payload: { hotspot } });
      },
    },
  };
};

export default useHotspots;
