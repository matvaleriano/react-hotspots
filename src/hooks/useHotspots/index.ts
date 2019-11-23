import { useReducer, useEffect } from 'react';
import { Hotspot } from 'shared/types/hotspot';
import { Actions, ReducerActions, State, UseHotspotsResult } from './types';
import { pointElement, dontPointElement } from 'shared/helpers/point';

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
    case Actions.toggleIsPointing:
      return {
        ...state,
        isPointing: action.payload.isPointing,
      };
    default:
      return state;
  }
};

const initialState = {
  isPointing: false,
  hotspots: [],
};

const useHotspots = (): UseHotspotsResult => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    deleteHotspot: (id: string): void => {
      dispatch({ type: Actions.deleteHotspot, payload: { id } });
    },
    editHotspot: (hotspot: Hotspot): void => {
      dispatch({ type: Actions.editHotspot, payload: { hotspot } });
    },
    saveHotspot: (hotspot: Hotspot): void => {
      dispatch({ type: Actions.saveHotspot, payload: { hotspot } });
    },
    toggleIsPointing: (isPointing: boolean = false): void => {
      dispatch({
        type: Actions.toggleIsPointing,
        payload: { isPointing: isPointing },
      });
    },
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const id = new Date().toISOString();
      const { x: left, y: top } = event;
      const hotspot = {
        position: {
          left,
          top,
        },
        id,
        title: '',
        description: '',
      };
      actions.saveHotspot(hotspot);
      dontPointElement(event);
    };

    if (state.isPointing) {
      document.addEventListener('mouseover', pointElement);
      document.addEventListener('mouseleave', dontPointElement);
      document.addEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('mouseover', pointElement);
      document.removeEventListener('mouseleave', dontPointElement);
      document.removeEventListener('click', handleClick);
    };
  }, [state.isPointing]);

  return {
    state,
    actions,
  };
};

export default useHotspots;
