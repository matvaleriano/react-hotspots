import {
  renderHook,
  RenderHookResult,
  act,
} from '@testing-library/react-hooks';
import useHotspots from '.';
import { UseHotspotsResult } from './types';

type Store = { hotspots?: string | undefined };
type StoreKey = keyof Store;
type LocalStorageMock = {
  getItem: jest.Mock;
  setItem: (key: StoreKey, value: string) => void;
  clear: () => void;
  removeItem: (key: StoreKey) => void;
};

let store: Store;

beforeEach(() => {
  const localStorageMock = ((): LocalStorageMock => {
    store = {};
    return {
      getItem: jest.fn().mockReturnValueOnce('[]'),
      setItem: (key: StoreKey, value: string): void => {
        store[key] = value;
      },
      clear: (): void => {
        delete store.hotspots;
      },
      removeItem: (key: StoreKey): void => {
        delete store[key];
      },
    };
  })();
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });
});

describe('useHotspots', () => {
  let hook: RenderHookResult<unknown, UseHotspotsResult>;

  beforeEach(() => {
    hook = renderHook(() => useHotspots());
  });

  test('should call localStorage.getItem once', () => {
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  test('should return isPointing false', () => {
    expect(hook.result.current.state.isPointing).toBeFalsy();
  });

  test.each`
    isPointing   | expected
    ${undefined} | ${false}
    ${false}     | ${false}
    ${true}      | ${true}
  `('should update isPointing', ({ isPointing, expected }) => {
    act(() => {
      hook.result.current.actions.toggleIsPointing(isPointing);
    });

    expect(hook.result.current.state.isPointing).toEqual(expected);
  });

  test('should return an empty array of hotspots', () => {
    expect(hook.result.current.state.hotspots).toEqual([]);
  });

  test('should add a hotspot', () => {
    const hotspot = {
      description: 'description',
      id: new Date().toISOString(),
      position: {
        left: 0,
        top: 0,
      },
      title: 'title',
    };
    act(() => {
      hook.result.current.actions.addHotspot(hotspot);
    });

    expect(hook.result.current.state.hotspots).toEqual([
      {
        ...hotspot,
        windowSize: {
          offsetWidth: 0,
          offsetHeight: 0,
        },
      },
    ]);

    const hotspots = JSON.parse(store.hotspots as string);
    expect(hotspots).toEqual([
      {
        ...hotspot,
        windowSize: {
          offsetWidth: 0,
          offsetHeight: 0,
        },
      },
    ]);
  });

  describe('deleteHotspot', () => {
    const id = new Date().toISOString();
    const hotspot = {
      description: 'description',
      id,
      position: {
        left: 0,
        top: 0,
      },
      title: 'title',
    };

    beforeEach(() => {
      act(() => {
        hook.result.current.actions.addHotspot({
          ...hotspot,
          windowSize: {
            offsetWidth: 0,
            offsetHeight: 0,
          },
        });
      });
    });

    test('should remove the hotspot by id', () => {
      act(() => {
        hook.result.current.actions.deleteHotspot(id);
      });

      expect(hook.result.current.state.hotspots).toEqual([]);
      const hotspots = JSON.parse(store.hotspots as string);
      expect(hotspots).toEqual([]);
    });

    test('should not remove any hotspot, id not found', () => {
      act(() => {
        hook.result.current.actions.deleteHotspot('wrong');
      });

      expect(hook.result.current.state.hotspots).toEqual([
        {
          ...hotspot,
          windowSize: {
            offsetWidth: 0,
            offsetHeight: 0,
          },
        },
      ]);

      const hotspots = JSON.parse(store.hotspots as string);
      expect(hotspots).toEqual([
        {
          ...hotspot,
          windowSize: {
            offsetWidth: 0,
            offsetHeight: 0,
          },
        },
      ]);
    });
  });

  describe('editHotspot', () => {
    const id = new Date().toISOString();
    const hotspot = {
      description: 'description',
      id,
      position: {
        left: 0,
        top: 0,
      },
      title: 'title',
    };

    beforeEach(() => {
      act(() => {
        hook.result.current.actions.addHotspot(hotspot);
      });
    });

    test('should call addEventListener 2 times after isPointing has setted to true', () => {
      jest.spyOn(document, 'addEventListener');
      act(() => {
        hook.result.current.actions.toggleIsPointing(true);
      });

      expect(document.addEventListener).toBeCalledTimes(2);
    });

    test('should call removeListener 2 times after isPointing has changed, to clear listeners on useEffect`s return', () => {
      jest.spyOn(document, 'removeEventListener');
      act(() => {
        hook.result.current.actions.toggleIsPointing(true);
      });

      expect(document.removeEventListener).toBeCalledTimes(2);
    });

    test('should update hotspot', () => {
      const { id, description } = hotspot;
      const editedHotspot = { id, description, title: 'new title' };
      act(() => {
        hook.result.current.actions.editHotspot(editedHotspot);
      });

      expect(hook.result.current.state.hotspots).toEqual([
        {
          ...hotspot,
          ...editedHotspot,
          windowSize: {
            offsetHeight: 0,
            offsetWidth: 0,
          },
        },
      ]);
    });

    test('should not update any hotspot', () => {
      const editedHotspot = { ...hotspot, id: 'notFoundId' };
      act(() => {
        hook.result.current.actions.editHotspot(editedHotspot);
      });
      expect(hook.result.current.state.hotspots).toEqual([
        {
          ...hotspot,
          windowSize: {
            offsetWidth: 0,
            offsetHeight: 0,
          },
        },
      ]);
    });

    test('should have hotspots in storage', () => {
      const hotspots = JSON.parse(store.hotspots as string);
      expect(hotspots).toEqual([
        {
          ...hotspot,
          windowSize: {
            offsetWidth: 0,
            offsetHeight: 0,
          },
        },
      ]);
    });
  });
});
