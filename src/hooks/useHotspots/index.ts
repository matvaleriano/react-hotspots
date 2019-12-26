import { useReducer, useEffect, useCallback } from 'react';
import { Hotspot } from 'shared/types/hotspot';
import { Actions, ReducerActions, State, UseHotspotsResult } from './types';
import {
  pointElement,
  removePointStyleFromElements,
} from 'shared/helpers/point';

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
          hotspot.id === action.payload.id
            ? { ...hotspot, ...action.payload }
            : hotspot
        ),
      };
    case Actions.addHotspot:
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

const getHotspotsFromStorage = (): Hotspot[] =>
  JSON.parse(localStorage.getItem('hotspots') || '[]');

const useHotspots = (): UseHotspotsResult => {
  const [state, dispatch] = useReducer(reducer, {
    isPointing: false,
    hotspots: getHotspotsFromStorage(),
  });

  const actions = {
    deleteHotspot: (id: string): void => {
      dispatch({ type: Actions.deleteHotspot, payload: { id } });
    },
    editHotspot: (payload: {
      id: string;
      title: string;
      description?: string;
    }): void => {
      dispatch({ type: Actions.editHotspot, payload });
    },
    addHotspot: useCallback(
      (hotspot: Hotspot): void => {
        const { offsetHeight, offsetWidth } = document.body;

        dispatch({
          type: Actions.addHotspot,
          payload: {
            hotspot: {
              ...hotspot,
              windowSize: {
                offsetHeight,
                offsetWidth,
              },
            },
          },
        });
      },
      [dispatch]
    ),
    toggleIsPointing: useCallback(
      (isPointing = false): void => {
        dispatch({
          type: Actions.toggleIsPointing,
          payload: { isPointing: isPointing },
        });
      },
      [dispatch]
    ),
  };

  const handleClick = useCallback(
    (event: MouseEvent) => {
      removePointStyleFromElements();
      actions.toggleIsPointing(false);
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
      actions.addHotspot(hotspot);
    },
    [actions]
  );

  useEffect(() => {
    if (state.isPointing) {
      document.addEventListener('mousemove', pointElement);
      document.addEventListener('click', handleClick);
    }

    return (): void => {
      document.removeEventListener('mousemove', pointElement);
      document.removeEventListener('click', handleClick);
    };
  }, [state.isPointing, handleClick]);

  useEffect(() => {
    localStorage.setItem('hotspots', JSON.stringify(state.hotspots));
  }, [state.hotspots]);

  return {
    state,
    actions,
  };
};

export default useHotspots;
