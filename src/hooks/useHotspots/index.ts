import { useReducer } from 'react';
import { Hotspot } from 'shared/types/hotspot';
import { Actions, ReducerActions, State, UseHotspotsResult } from './types';

const reducer = (state: State, action: ReducerActions): State => {
  switch (action.type) {
    case Actions.deleteHotspot:
      return {
        ...state,
        hotspots: state.hotspots.filter(({ id }) => id !== action.payload.id),
      };
    case Actions.editHotspot:
      return {
        ...state,
        hotspots: state.hotspots.map(hotspot =>
          hotspot.id === action.payload.hotspot.id
            ? action.payload.hotspot
            : hotspot
        ),
      };
    case Actions.saveHotspot:
      return {
        ...state,
        hotspots: [...state.hotspots, action.payload.hotspot],
      };
    case Actions.toggleIsClicking:
      return {
        ...state,
        isClicking: action.payload.isClicking,
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
      deleteHotspot: (id: string): void => {
        dispatch({ type: Actions.deleteHotspot, payload: { id } });
      },
      editHotspot: (hotspot: Hotspot): void => {
        dispatch({ type: Actions.editHotspot, payload: { hotspot } });
      },
      saveHotspot: (hotspot: Hotspot): void => {
        dispatch({ type: Actions.saveHotspot, payload: { hotspot } });
      },
      toggleIsClicking: (isClicking: boolean = false): void => {
        dispatch({
          type: Actions.toggleIsClicking,
          payload: { isClicking: isClicking },
        });
      },
    },
  };
};

export default useHotspots;
